import Todo from "../models/todo";

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
      <div>{head}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleClick(item.title)}>
            {item.title} {item.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default To;
