import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: Todo[];
  head: string;
  onDelete: (title: string) => void;
}> = ({ items, head, onDelete }) => {
  return (
    <>
      <div>{head}</div>
      <ul>
        {items.map((item) => (
          // <li key={item.id}>{item.title}</li>
          <TodoItem key={item.id} title={item.title} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
