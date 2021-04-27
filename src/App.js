import Start from './Start.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const defaultBlack = '#292929';
const selectionTextColor = '#FFFFFF';
const selectionColor = '#1F1F4D';
const defaultBorder = '2px solid';
const defaultRadius = '5px';
const defaultOpacity = 0.8;

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
      main: defaultBlack,
    },
    text: {
      primary: defaultBlack,
    },
    action: {
      hoverOpacity: defaultOpacity,
    }
  },
  overrides: {
    MuiButton: {
      root: {
        border: defaultBorder,
        borderColor: defaultBlack,
        borderRadius: defaultRadius,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: selectionColor,
          color: selectionTextColor,
        },
      },
    },
    MuiToggleButton: {
      root: {
        border: defaultBorder,
        borderColor: defaultBlack,
        borderRadius: defaultRadius,
        textTransform: 'none',
        color: defaultBlack,
        '&:hover': {
          backgroundColor: selectionColor,
          borderColor: defaultBlack,
          color: selectionTextColor,
        },
        '&$selected': {
          backgroundColor: selectionColor,
          borderColor: defaultBlack,
          color: selectionTextColor,
        },
        '&$disabled': {
          backgroundColor: selectionColor,
          borderColor: defaultBlack,
          color: selectionTextColor,
        },
      },
    },
    MuiSelect: {
      root: {
        border: defaultBorder,
        borderRadius: defaultRadius,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: selectionColor,
        },
        '&:hover': {
          backgroundColor: fade(selectionColor, defaultOpacity),
        },
      },
    },
    MuiSlider: {
      root: {
        color: selectionColor,
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
