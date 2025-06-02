
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark' depending on your UI
    primary: {
      light: '#90a4ae',   // optional light shade
      main: '#607d8b',    // 500
      dark: '#455a64',    // 700
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b0bec5',     // a lighter grey-blue
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#263238',  // 900 (darkest)
      secondary: '#546e7a', // 600
    },
  },
});

export default theme;
