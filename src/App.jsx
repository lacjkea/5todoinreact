import { useState } from "react";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);
  const handler = () => {
    console.log("handler clicked");
  };
  return (
    <div className="App">
      <Form clickHandler={handler} />
      <List />
    </div>
  );
}

export default App;
