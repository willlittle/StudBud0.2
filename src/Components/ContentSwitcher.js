import React,{useState, useContext} from 'react';
import {StateManager} from './StateManager'
import TaskList from './TaskList'
import ExpandedTask from './ExpandedTask'
import NavBar from './NavBar'




const ContentSwitcher = () => {
    const {tasks, state} = useContext(StateManager)
    const [taskList, setTasks] = tasks
    const [appState, setAppState] = state

    const switcher = () =>{
        switch(appState.home){
            case true:
                 return  <TaskList/>
            case false:
                return  <ExpandedTask/>
        }
        
    }
    return (
        <>
        <NavBar/>
        {switcher()}
        </>
    )
}

export default ContentSwitcher
