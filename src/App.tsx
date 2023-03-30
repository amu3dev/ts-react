import Todos from "./components/Todos";
import To from "./components/To";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const todosI: Todo[] = [
    { id: "0", title: "Learn JavaScript", completed: true },
    { id: "1", title: "Learn TypeScript", completed: true },
    { id: "2", title: "Learn React", completed: true },
    { id: "3", title: "Learn Redux", completed: false },
    { id: "4", title: "Learn GraphQL", completed: false },
  ];
  const onSubmitNewTodo = (text: string) => {
    const newTodo = {
      id: Math.random().toString(),
      title: text,
      completed: false,
    };
    //setTodos([...todos, newTodo]);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const handleDelete = (title: string) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };
  // TODO: fix this
  const handleFoundation = (title: string) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  const [todos, setTodos] = useState<Todo[]>(todosI);

  const head = "To do list";

  return (
    <div>
      <NewTodo onSubmit={onSubmitNewTodo} />
      <Todos items={todosI} head={"Foundation"} onDelete={handleFoundation} />
      <To items={todos} head={head} onDelete={handleDelete} />
    </div>
  );
}

export default App;
