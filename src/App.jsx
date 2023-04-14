// https://www.npmjs.com/package/uuid - usage call:
//uuidv4();
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  //const [count, setCount] = useState([{
  const [tasks, setTasks] = useState([
    {
      task: "milk",
      completed: false,
      id: 1,
    },
    {
      task: "feed cat",
      completed: false,
      id: 2,
    },
    {
      task: "eat",
      completed: false,
      id: 3,
    },
  ]);

  function addTask(taskname) {
    // uuidv4();
    console.log("taskname", taskname);
    //we now need to add this task (an object to our stateArray of tasks)
    const newTask = {
      task: taskname,
      completed: false,
      id: uuidv4(),
    };
    setTasks((oldArrayOfTasks) => oldArrayOfTasks.concat(newTask));
  }

  function completeTask(id) {
    console.log("btnClicked", id);
    setTasks((oldArrayOfTasks) =>
      oldArrayOfTasks.filter((onetask) => onetask.id !== id)
    );
  }

  const handler = (e) => {
    /* demo */
    e.preventDefault();
    console.log("handler clicked");
  };
  return (
    <div className="App">
      <div>Hey</div>
      {/* <Form clickHandler={handler} /> */}
      <Form addTask={addTask} /> {/* Now the form can pick it up from props*/}
      <List tasks={tasks} completeTask={completeTask} />
      {/* 1. pass tasks down to List, who needs to pick it up 2. later the same goes for completeTask */}
      <button>Demo-button console</button>
    </div>
  );
}

export default App;
