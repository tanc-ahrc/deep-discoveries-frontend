import Start from './Start.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightRegular: 500,
    h1: {
     fontSize: '2rem',
     lineHeight: '3rem', //same line height throughout, so first visible component appears in consistent place
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '3rem', //same line height throughout, so first visible component appears in consistent place
    },
    h3: {
      fontSize: '1.3rem',
      lineHeight: '3rem', //same line height throughout, so first visible component appears in consistent place
    },
    button: {
      fontSize: '1.1rem',
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
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#1F1F4D',
          color: '#FFFFFF',
        },
      },
    },
    MuiSelect: {
      root: {
        border: '2px solid',
        boxSizing: 'border-box',
        borderRadius: '5px',
      },
    },
  },
});

// The div will be the outer wrapping
// for all screens, so its spacing-out
// styling applies to all screens.
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{paddingTop: '5vh'}}>
        <Start/>
      </div>
    </ThemeProvider>
  );
}
