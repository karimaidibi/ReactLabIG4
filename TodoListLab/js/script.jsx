//container
const container = document.getElementById('container')

//title
const title = <h1>''TodoList''</h1>

//component of a single task
const Task = (props) => <li>{props.taskName}</li>



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

const Todo = <TasksList todoListName = "Todo" tasks = {['Buy Milk','Call Mom!!']} />
const WIP = < TasksList todoListName = 'WIP' tasks = {['AWI Project','Call Mom']} />
const mainDiv = <div>{title}{Todo}{WIP}</div>

// render the page
ReactDOM.render(mainDiv,container)