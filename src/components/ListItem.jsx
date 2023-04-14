export default function ListItem(props) {
  return (
    <li>
      <h3>To-Do: {props.task}</h3>
      <button type="button">Complete</button>
    </li>
  );
}
