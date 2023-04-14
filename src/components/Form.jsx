import ListItem from "./ListItem";

export default function Form(props) {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.elements.thenametask.value);
    props.addTask(e.target.elements.thenametask.value);
    e.target.elements.thenametask.value =""
    //we have completed, task, id - we only need task for the form to send up
  }
  return (
    <form onSubmit={submit} action="#">
      <label htmlFor="form_task">Add a new task</label>
      <input required type="text" name="thenametask" id="form_task" />
      <button type="submit">Add</button>
    </form>
  );
}
