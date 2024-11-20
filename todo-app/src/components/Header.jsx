export function Header(props) {
  const { todos } = props;
  const todoLength = todos.length;
  const isPlural = todoLength != 1 ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
       Add new tasks to your TodoList
      </h1>
      <h4>
        You currently have {todoLength} {isPlural} in your list.
      </h4>
    </header>
  );
}
