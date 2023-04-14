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
      id: 1,
    },
    {
      task: "eat",
      completed: false,
      id: 1,
    },
  ]);

  const handler = (e) => {
    e.preventDefault();
    console.log("handler clicked");
  };
  return (
    <div className="App">
      <div>Hey</div>
      <Form clickHandler={handler} />
      <List tasks={tasks} />
      {/* pass tasks down to List, who needs to pick i t up */}
      <button>Demo-button console</button>
    </div>
  );
}

export default App;
