import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[]; head: string }> = ({ items, head }) => {
  return (
    <>
      <div>{head}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
