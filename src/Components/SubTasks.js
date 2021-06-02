import React,{useContext} from 'react'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import {StateManager} from './StateManager'


const useStyles = makeStyles((theme) => ({
    root: {
      height:'58vh',
      display: 'flex',
      flexDirection:'column',
      margin:theme.spacing(2),
    },
    paper:{
        minHeight:'5vh',
        margin:theme.spacing(2),
    },
    gridCont:{
        mar: theme.spacing(4),
        minHeight: '40vh',
        flexShrink:3
    },
    input:{
        margin:theme.spacing(4),
        position: 'bottom'
    }
  }));

const SubTasks = () => {
    const {tasks, state} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    const [appState, setAppState] = state
    const classes = useStyles()


const click = () =>{
    setTasks((prevTasks)=>(
        
        [...prevTasks,{
            key: appState.selectedTask.key,
            title: appState.selectedTask.title,
            description: appState.selectedTask.description,
            subject: appState.selectedTask.subject,
            dueDate: appState.selectedTask.dueDate,
            priority: appState.selectedTask.priority,
            estTime: appState.selectedTask.estTime,
            type: appState.selectedTask.type,
            dateAdded: appState.selectedTask.dateAdded,
            subTasks: [...appState.selectedTask.subTasks, 'a'],
            references: appState.selectedTask.refernces,
            completed: appState.selectedTask.completed
        }]
        
        
    ))}

    
    return (
        <Box className={classes.root}>
            <Box className={classes.input} >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} lg={4} >
                        <Paper> 
                            <Input fullWidth={true} placeholder='Enter Subtask Title'></Input>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} >
                        <Button position='fixed' onClick={(e)=>(
                            click()
                        )}>click</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.display}   >
                <Grid container spacing={1} maxWidth='lg' overflow="auto">
                {appState.selectedTask.subTasks.map((sT)=>(
                    <Grid item xs={12} md={6} lg={6} className={classes.stat}>
                            <Paper className={classes.paper}>hi</Paper>
                    </Grid>
                    ))}
                </Grid>
            </Box>
            
            
        
        </Box>
    )
}

export default SubTasks
