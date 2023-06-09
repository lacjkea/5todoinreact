import ListItem from "./ListItem";

export default function List(props) {
  //   console.log("props", props.tasks);
  return (
    <section className="List">
      <ul>
        {props.tasks.map((task) => (
          //   console.log("task", task); virker ikke kig på Components i Dev tools
          <ListItem key={task.id} completeTask={props.completeTask} {...task} />
          /* look at ListItem - it now receives some variables*/
        ))}
      </ul>
    </section>
  );
}
