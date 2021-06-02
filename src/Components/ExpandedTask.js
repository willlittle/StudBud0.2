import React,{useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {StateManager} from './StateManager'
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ClassIcon from '@material-ui/icons/Class';
import SchoolIcon from '@material-ui/icons/School';
import ExpandedSwitcher from './ExpandedSwitcher'
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        display: 'flex',
  },
  titles:{
    paddingTop:theme.spacing(0),
    paddingLeft:theme.spacing(4),
    alignItems: 'center'
  },
  paper: {
   
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #303540 30%, #202830  90%)', 
  },
  fixedHeight: {
    display:'flex',
    minHeight:140,
    padding:theme.spacing(2)
  },
  stat:{
    display:'flex',
    width:'inherit',
    alignText:'center',
    padding:theme.spacing(0.5),
    paddingLeft:theme.spacing(2),
    alignItems:'center',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const {tasks, state} = useContext(StateManager)
  const [taskList, setTasks] = tasks
  const [appState, setAppState] = state
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const addSubT = () =>{
    alert('pass')
    setAppState((prev)=>({
        title:'123'
    })
  )}

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" maxHeight='lg'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} lg={7}>
              <Paper className={fixedHeightPaper}>
                <Box className={classes.titles}>
                <Typography variant='h3'>{appState.selectedTask.title}</Typography>
                <Typography variant='h4' color='textSecondary'>{appState.selectedTask.description}</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Paper className={fixedHeightPaper}>
                <Grid container spacing={1}>
                    <Grid item xs={6} md={6} lg={6} className={classes.stat}>
                      <Paper className={classes.stat}>
                        <DateRangeIcon fontSize='small' style={{marginRight: 10}} color='secondary'/>
                        <Typography variant='h7' color='textPrimary'>{appState.selectedTask.dueDate.toLocaleDateString()}</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} className={classes.stat}>
                      <Paper className={classes.stat}>
                        <TimerIcon fontSize='small' style={{marginRight: 10}} color='secondary'/>
                        <Typography variant='h7' color='textPrimary'>{appState.selectedTask.estTime} min</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} className={classes.stat}>
                      <Paper className={classes.stat}>
                        <PriorityHighIcon fontSize='small' style={{marginRight: 10}} color='secondary'/>
                        <Typography variant='h7' color='textPrimary'>{appState.selectedTask.priority}</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} className={classes.stat}>
                      <Paper className={classes.stat}>
                        <ClassIcon fontSize='small' style={{marginRight: 10}} color='secondary'/>
                        <Typography variant='h7' color='textPrimary'>{appState.selectedTask.type}</Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} className={classes.stat}>
                      <Paper className={classes.stat}>
                        <SchoolIcon fontSize='small' style={{marginRight: 10}} color='secondary'/>
                        <Typography variant='h7' color='textPrimary'>{appState.selectedTask.subject}</Typography>
                      </Paper>
                    </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ExpandedSwitcher addSubT={addSubT}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}