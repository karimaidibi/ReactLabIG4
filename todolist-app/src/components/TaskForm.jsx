import React, { useState } from 'react';

//taskForm
function TaskForm(props){

    //init 
    const [newTask, setTask] = useState("")

    //handle
    const handleChange = (event) => {
            setTask(event.target.value)
    }

    const submit = () =>{
        props.handleClick(newTask)
        setTask("")
    }

    //return UI
    return (
        <div>
            <input name = "newTask" onChange = {handleChange} value={newTask}></input>
            <input type = "submit" onClick = {submit}></input>
        </div>
    )
}

export default TaskForm