/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
