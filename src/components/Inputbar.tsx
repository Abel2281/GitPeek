import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useGitHub } from '../context/Githubusercontext';

function Inputbar() {
  const [username, setUsername] = useState('');

  const {setUserdata}: any = useGitHub();

  const handleSearch = async () => {
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        alert('User not found');
        return;
      }

      const data = await response.json();
      console.log(data);
      setUserdata(data);
    } catch (err) {
      console.log(err);
      alert('An error occurred while fetching user data.');
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <TextField
        required
        id="outlined-required"
        label="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}

export default Inputbar;
