import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
//component of list of tasks
class TasksList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tasks : this.props.tasks
        }
        this.addTask = this.addTask.bind(this)
    }

    //push the new task to the old tasks and change the state of the component
    addTask(newTask){
        this.setState({tasks : [...this.state.tasks, newTask]})
    }

    render(){
        return (
            <div style = {{display : 'inline-block'}}>
                <h2>{this.props.todoListName}</h2>
                <ul>
                    {this.state.tasks.map(t => <Task taskName = {t} />)}
                </ul>
                <TaskForm handleClick = {this.addTask}/>
            </div>
        ) 
    }
}

export default TasksList