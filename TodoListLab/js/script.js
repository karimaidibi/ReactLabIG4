//container
const container = document.getElementById('container'); //title

const title = /*#__PURE__*/React.createElement("h1", null, "''TodoList''"); //component of a single task

const Task = props => /*#__PURE__*/React.createElement("li", null, props.taskName); //component of list of tasks


class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };
    this.addTask = this.addTask.bind(this);
  } //push the new task to the old tasks and change the state of the component


  addTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-block'
      }
    }, /*#__PURE__*/React.createElement("h2", null, this.props.todoListName), /*#__PURE__*/React.createElement("ul", null, this.state.tasks.map(t => /*#__PURE__*/React.createElement(Task, {
      taskName: t
    }))), /*#__PURE__*/React.createElement(TaskForm, {
      handleClick: this.addTask
    }));
  }

} //taskForm


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };

    this.handleChange = event => {
      this.setState({
        newTask: event.target.value
      });
    };

    this.submit = () => {
      this.props.handleClick(this.state.newTask);
      this.setState({
        newTask: ""
      });
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      name: "newTask",
      onChange: this.handleChange,
      value: this.state.newTask
    }), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      onClick: this.submit
    }));
  }

}

const Todo = /*#__PURE__*/React.createElement(TasksList, {
  todoListName: "Todo",
  tasks: ['Buy Milk', 'Call Mom!!']
});
const WIP = /*#__PURE__*/React.createElement(TasksList, {
  todoListName: "WIP",
  tasks: ['AWI Project', 'Call Mom']
});
const mainDiv = /*#__PURE__*/React.createElement("div", null, title, Todo, WIP); // render the page

ReactDOM.render(mainDiv, container);