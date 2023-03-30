import Todo from "../models/todo";
import styles from "./Todos.module.css";
import xyz from "./TodoItem.module.css";

interface ToProps {
  items: Todo[];
  head: string;
  onDelete: (title: string) => void;
}
const To = ({ items, head, onDelete }: ToProps) => {
  const handleClick = (title: string) => {
    console.log("Clicked");
    onDelete(title);
  };

  return (
    <div>
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
          <li
            key={item.id}
            onClick={() => handleClick(item.title)}
            className={xyz.item}>
            {item.title} {item.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default To;
