import React from 'react';

import { createMuiTheme, makeStyles, ThemeProvider,  } from '@material-ui/core/styles';
import {CssBaseline, Typography, Paper} from '@material-ui/core'
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import {StateProvider} from './Components/StateManager'
import ContentSwitcher from './Components/ContentSwitcher'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: deepOrange,
    background: {
      default: "#222222"
    },
    text:{
      primary: "rgb(225,225,225)"
    }
  },
});


const useStyles = makeStyles((theme) => ({
 root: {
    height: '100vh',
    background: 'rgb(30,30,30)'
 },
  paper: {
    height: '100vh',
    width: '100vw',
    position: 'relative'
  }
}))



export default function CustomStyles() {
  const classes = useStyles()
  return (
    <>
    <CssBaseline/>
    <StateProvider>
      <ThemeProvider theme={darkTheme}>
          
            <div className={classes.root}>
              <ContentSwitcher/>
              
            </div>
    </ThemeProvider>
  </StateProvider>
  </>
  );
}

// import './App.css';
// import {Typography, AppBar, Card, Button, CardActions, CardContant, CardMedia, CssBaseline, Grid, TollBar, Container, Toolbar, ThemeProvider,} from '@material-ui/core'
// import {Photo, PhotoCamera} from '@material-ui/icons'
// import Theme from './Providers/Theme'
// import { createMuiTheme } from '@material-ui/core/styles';

// function App() {

//   const theme = createMuiTheme({
//     palette: {
//       primary: {
//         light: '#c3fdff',
//         main: '#90caf9',
//         dark: '#002884',
//         contrastText: '#000',
//       },
//       secondary: {
//         light: '#ffe97d',
//         main: '#ffb74d',
//         dark: '#c88719',
//         contrastText: '#000',
//       },
//     },
//   });


//   return (
//     <> 
//     <ThemeProvider theme={theme}></ThemeProvider>
//       <AppBar position='relative'>
//       <PhotoCamera/>
//     </AppBar>
//     <Button color={'primary'} >click</Button>
//     </>
//   );
// }

// export default App;

            