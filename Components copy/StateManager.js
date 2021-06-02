import {createContext, useState} from 'react'

export const StateManager = createContext();
    
export const StateProvider = props  => {
    var d = new Date().toLocaleString()
    const [tasks, setTasks] = useState([
        {
            key: 1,
            title: "Final Exam",
            description: "Info1110 finals",
            subject: 'DECO3100',
            dueDate: new Date('2021-06-18T21:11:54'),
            priority: (2, 'High'),
            estTime: 260,
            type: "Exam",
            dateAdded: d,
            subTasks: ['a','a'],
            references: [],
            completed: false
        },
        {
            key: 2,
            title: "Design webApp",
            description: "Design this program",
            subject: 'DECO3100',
            dueDate: new Date('2021-06-18T21:11:54'),
            priority: (2, 'High'),
            estTime: 260,
            type: "Assignment",
            dateAdded: d,
            subTasks: [],
            references: [],
            completed: false
        }
    ]);

    const [appState, setAppState]= useState({
        subjects: ['INFO1110', 'DECO3100', 'DECO3100'],
        taskTypes: ['Quiz', 'Design Project', 'Exam', 'Presentation', 'Essay', 'Portfolio', 'Other'],
        selectedTask: {},
        priority:[(0,'Low'),(1,'Medium'), (2,'High')],
        home: true
    })
return (
        <StateManager.Provider value={{tasks:[tasks, setTasks],state:[appState, setAppState]}}>
            {props.children}
        </StateManager.Provider>
    )
}

