import './App.css'
import Navbar from './components/Navbar'
import Inputbar from './components/Inputbar'
import { CssBaseline } from '@mui/material';
import UserCard from './components/UserCard';

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Inputbar />
      <UserCard />
    </>
  )
}

export default App
