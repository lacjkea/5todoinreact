// import { useState } from "react";
import ListItem from "./ListItem";

export default function Form() {
  /*   const [listItems, setListItems] = useState([]);
  function addListItem(e) {
    // e.preventDefault();
    console.log(e.target.previousElementSibling.value);
  } */
  return (
    <form action="#">
      <input type="text" />
      <button type="submit" onClick={addListItem}>
        Add
      </button>
    </form>
  );
}
