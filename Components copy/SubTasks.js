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
    setAppState((prevState)=>({
        
        selectedTask: {
            key: prevState.selectedTask.key,
            title: 'yallah',
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
        
        home: false
    }))
}
    
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
