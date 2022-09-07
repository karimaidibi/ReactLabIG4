import logo from './logo.svg';
import './App.css';
import TasksList from './components/TasksList';

function App() {
  //title
  const title = <h1>''TodoList''</h1>
  const Todo = <TasksList todoListName = "Todo" tasks = {['Buy Milk','Call Mom!!']} />
  const WIP = < TasksList todoListName = 'WIP' tasks = {['AWI Project','Call Mom']} />
  const mainDiv = <div>{title}{Todo}{WIP}</div>
  return (
    mainDiv
  );
}

export default App;
