import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.tsx'

import { GitHubProvider } from './context/Githubusercontext.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
      <StrictMode>
        <GitHubProvider>
           <App />
        </GitHubProvider>
      </StrictMode>,
  </ThemeProvider>
  
)
