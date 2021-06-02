import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {StateManager} from './StateManager.js'
import FolderIcon from '@material-ui/icons/Folder';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(4),
    

  },
  listItem: {
    marginTop: theme.spacing(2),
    background: 'linear-gradient(45deg, #303540 30%, #202830  90%)', 
  },
  liTextP:{
    color:'rgb(240,240,240)'
  },
  liTextS:{
    color:'rgb(150,150,150)'
  }
    
  
}));

export default function InteractiveList() {
    const classes = useStyles();
    const {tasks, state} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    const [appState, setAppState] = state

    const navToTask = (t) =>{
        setAppState({
            selectedTask:t,
            home: false
        })
    }
  return (
    
          <div>
              <Container className={classes.container} maxWidth='sm' maxHeight='sm'>
            <List >
              {taskList.map((t) => (
                  
                <ListItem className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                  
                    primary={<Typography className={classes.liTextP}>{t.title}</Typography>}
                    secondary={<Typography className={classes.liTextS}>{t.description}</Typography>}
                    
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={(e)=>{navToTask(t)}}>
                      <OpenInNewIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            </Container>
          </div>
  
  );
}