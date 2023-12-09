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
      main: '#ea4c87',
    },
    secondary: {
      main: '#19857b',
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
