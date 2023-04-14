import ListItem from "./ListItem";

export default function Form(props) {
  /*   const [listItems, setListItems] = useState([]);
  function addListItem(e) {
    // e.preventDefault();
    console.log(e.target.previousElementSibling.value);
  } */

  function submit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <form onSubmit={submit} action="#">
      <input type="text" />
      <button type="submit">Add</button>
    </form>
  );
}
