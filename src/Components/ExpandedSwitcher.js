import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SubTasks from './SubTasks'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #303540 30%, #202830  90%)'
  },
});


export default function CenteredTabs({addSubT}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const expandedTaskSwitch = () => {
    switch(value){
        case 0:
            return <SubTasks addSubTasks={addSubT}/>
        case 1:
            return <h1> Pomodor </h1>
        case 2:
            return <h1> References </h1>
        case 3:
            return <h1> Players </h1>
    }
}


  return (
        <>
            <Paper className={classes.root}>
            <Tabs position='fixed'
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant='fullWidth'
                centered
            >
                <Tab textColor='primary' label="SubTasks" />
                <Tab label="Pomodoro Timer" />
                <Tab label="Refernces" />
                <Tab label="Player" />
            </Tabs>
            </Paper>
            <Box>
                {expandedTaskSwitch()}
            </Box>
        </>
  );
}