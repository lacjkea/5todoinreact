export default function ListItem(props) {
  console.log("sp", props);
  return (
    <li>
      <h3>To-Do: {props.task}</h3>
      {/*    <button type="button" onClick={props.completeTask}>Complete</button> */}
      <button
        type="button"
        onClick={() => {
          props.completeTask(props.id);
        }}
      >
        Complete
      </button>
    </li>
  );
}
