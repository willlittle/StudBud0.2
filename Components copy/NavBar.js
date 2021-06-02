import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddTask from './AddTask'
import {StateManager} from './StateManager'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    paper:{
      maxHeight:'8vh',
      display:'flex',
      
      alignContent: 'center'
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar({back, submit}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {tasks, state} = useContext(StateManager)
  const [taskList, setTasks] = tasks
  const [appState, setAppState] = state

  const handleBack = () => {
   
      setAppState((prevState)=>({
        subjects: prevState.subjects,
        taskTypes: prevState.taskTypes,
        selectedTask:{
          key: prevState.selectedTask.key,
          title: prevState.selectedTask.title,
          description: prevState.selectedTask.description,
          subject: prevState.selectedTask.subject,
          dueDate: prevState.selectedTask.dueDate,
          priority: prevState.selectedTask.priority,
          estTime: prevState.selectedTask.estTime,
          type: prevState.selectedTask.type,
          dateAdded: prevState.selectedTask.dateAdded,
          subTasks: [...prevState.selectedTask.subTasks, 'a'],
          references: prevState.selectedTask.refernces,
          completed: prevState.selectedTask.completed
      },
      
        priority:prevState.priority,
        home: true
      }))
  }


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const iconSwitcher = () =>{
    if (appState.home == false){
      return (
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <KeyboardBackspaceIcon onClick={() => (handleBack())} />
      </IconButton>
      )  
  }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.paper}>
        <Toolbar>
          {iconSwitcher()}
          <Typography variant="h6" className={classes.title}>
          StudBud
          </Typography>
          {appState.home?
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AddIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                
                anchorEl={anchorEl}
                
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                  
                <MenuItem disableRipple={true} disableFocus={true}>
                    {/* <AddTask /> */}
                </MenuItem>
              </Menu>
            </div>
          :""}
        </Toolbar>
      </AppBar>
    </div>
  );
}