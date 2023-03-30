import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  head: string;
  onDelete: (title: string) => void;
}> = ({ items, head, onDelete }) => {
  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          borderRadius: "5px",
          width: "10em",
          textAlign: "center",
          margin: "1em auto auto",
          padding: "1em 0 1em 0",
        }}>
        {head}
      </div>
      <ul className={styles.todos}>
        {items.map((item) => (
          // <li key={item.id}>{item.title}</li>
          <TodoItem key={item.id} title={item.title} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
