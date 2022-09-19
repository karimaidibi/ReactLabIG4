import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
//component of list of tasks
function TasksList(props){

    //init
    const [tasks,setTasks] = useState([])

    //handling
    //push the new task to the old tasks and change the state of the component
    const addTask = (newTask) => {
        setTasks(tasks => [...tasks, newTask])
    }

    //useEffects   
    //getch data for todo list
    useEffect(()=>{
        fetch("http://localhost:3001/tasks")
        .then(resp => resp.json())
        .then(data => setTasks(data.map(t=>t.task)))
    },[])

    //return UI
    return (
        <div style = {{display : 'inline-block'}}>
            <h2>{props.todoListName}</h2>
            <ul>
                {tasks.map(t => <Task taskName = {t} />)}
            </ul>
            <TaskForm handleClick = {addTask}/>
        </div>
    ) 

}

export default TasksList