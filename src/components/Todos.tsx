import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; head: string }> = ({ items, head }) => {
  return (
    <>
      <div>{head}</div>
      <ul>
        {items.map((item) => (
          // <li key={item.id}>{item.title}</li>
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
