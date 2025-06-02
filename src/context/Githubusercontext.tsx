import {createContext, useContext, useState} from 'react';

export interface GithubUser {
    name: string;
    followers: number;
    following: number;
    avatar_url: string;
    public_repos: number;
    bio: string;
    html_url: string;
}

interface GithubContextType {
    userdata : GithubUser | null;
    setUserdata : React.Dispatch<React.SetStateAction<GithubUser | null>>;
}

const GitHubContext = createContext<GithubContextType | undefined>(undefined);

export  const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
    const [userdata,setUserdata] = useState<GithubUser | null>(null);

    return(
        <GitHubContext.Provider value={{userdata,setUserdata}}>
            {children}
        </GitHubContext.Provider>
    )
    
}

export const useGitHub = (): GithubContextType => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error('useGitHub must be used within a GitHubProvider');
  }
  return context;
}