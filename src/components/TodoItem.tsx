const TodoItem: React.FC<{
  title: string;
  onDelete: (title: string) => void;
}> = ({ title, onDelete }) => {
  const handelClick = () => {
    // console.log(title);
    onDelete(title);
  };
  return <li onClick={handelClick}>{title}</li>;
};

export default TodoItem;
