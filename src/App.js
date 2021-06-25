import Start from './Start.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';

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
          backgroundColor: fade(selectionColor, defaultOpacity),
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
    MuiCircularProgress: {
      colorPrimary: {
        color: selectionColor,
      },
    },
  },
});

// The div will be the outer wrapping
// for all screens, so its spacing-out
// styling applies to all screens.
export default function App() {
  const [menuLocation, setMenuLocation] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar style={{backgroundColor: '#3f51b5'}} position="fixed">
          <Toolbar>
            <IconButton onClick={()=> {window.location.reload();}}>
              <HomeIcon style={{color: 'white'}}/>
            </IconButton>
            <IconButton onClick={(e)=>{setMenuLocation(e.currentTarget);}}>
              <MenuIcon style={{color: 'white'}}/>
            </IconButton>
              <Menu
                anchorEl={menuLocation}
                open={Boolean(menuLocation)}
              >
                <MenuList onMouseLeave={()=>{setMenuLocation(null);}}>
                  <MenuItem><a href="https://tanc-ahrc.github.io/DeepDiscoveries/">Project website</a></MenuItem>
                  <MenuItem><a href="https://github.com/tanc-ahrc/deep-discoveries-frontend">Source (GitHub)</a></MenuItem>
                  <MenuItem onClick={()=>{setAboutOpen(true);}}>About</MenuItem>
                </MenuList>
              </Menu>
          </Toolbar>
        </AppBar>
        <Dialog open={aboutOpen} onClose={()=>{setAboutOpen(false);}}>
          <DialogTitle>About</DialogTitle>
          <DialogContent>
            <DialogContentText>Site designed by the Deep Discoveries Team.</DialogContentText>
            <DialogContentText>Copyright &copy; 2021 Crown Copyright (The National Archives) except where otherwise stated in the source code.</DialogContentText>
            <DialogContentText>Licensed under the MIT License.</DialogContentText>
            <DialogContentText>See <a href="https://github.com/tanc-ahrc/deep-discoveries-frontend">source code</a> for details.</DialogContentText>
          </DialogContent>
        </Dialog>
          <div style={{position: 'relative', top: '10vh'}}>
            <Start/>
            <Typography style={{marginTop: '10vh', position: 'relative'}} align='center'>
              Images &#169; Victoria and Albert Museum, London, &#169; Royal Botanic Garden Edinburgh and &#169; Crown Copyright (The National Archives)
            </Typography>
          </div>
      </ThemeProvider>
    </div>
  );
}
