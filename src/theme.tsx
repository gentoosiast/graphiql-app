import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#2b3238',
      paper: '#3b4248',
    },
    error: {
      main: red.A400,
    },
    mode: 'dark',
    primary: {
      dark: '#ccc',
      light: '#ff8ebc',
      main: '#ea4c87',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Philosopher',
    },
    h2: {
      fontFamily: 'Philosopher',
    },
  },
});

export default theme;
