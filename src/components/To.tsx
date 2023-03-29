import Todo from "../models/todo";

interface ToProps {
  items: Todo[];
  head: string;
}
const To = ({ items, head }: ToProps) => {
  return (
    <div>
      <div>{head}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} {item.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default To;
