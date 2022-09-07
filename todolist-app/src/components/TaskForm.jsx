import React from 'react';

//taskForm
class TaskForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            newTask : ""
        }

        this.handleChange = (event) => {
            this.setState({
                newTask : event.target.value
            })
        }

        this.submit = () =>{
            this.props.handleClick(this.state.newTask)
            this.setState({
                newTask : ""
            })
        } 
    }

    render(){
        return (
            <div>
                <input name = "newTask" onChange = {this.handleChange} value={this.state.newTask}></input>
                <input type = "submit" onClick = {this.submit}></input>
            </div>
        )
    }
}

export default TaskForm