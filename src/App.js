import Start from './Start.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightRegular: 500,
    h1: {
     fontSize: '1.5em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '29px',
    },
  },
  palette: {
    primary: {
      main: '#292929',
    },
    text: {
      primary: '#292929',
    },
    action: {
      hoverOpacity: 0.8,
    }
  },
  overrides: {
    MuiButton: {
      root: {
        border: '2px solid',
        boxSizing: 'border-box',
        borderRadius: '5px',
        fontStyle: 'normal',
        fontSize: '16px',
        lineHeight: '23px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#1F1F4D',
          color: '#FFFFFF',
        },
      },
    },
    MuiSelect: {
      root: {
        border: '2px solid #E9E9E9',
        boxSizing: 'border-box',
        borderRadius: '5px',
      },
    },
  },

  // Seems I'm allowed to add arbitrary
  // attributes to my theme
  outerComponent: {
    paddingTop: '5vh',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Start/>
    </ThemeProvider>
  );
}
