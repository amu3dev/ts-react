import Todos from "./components/Todos";
import To from "./components/To";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

const todos: Todo[] = [
  { id: "1", title: "Learn TypeScript", completed: true },
  { id: "2", title: "Learn React", completed: true },
  { id: "3", title: "Learn Redux", completed: false },
  { id: "4", title: "Learn GraphQL", completed: false },
];

function App() {
  const head = "To do list";

  return (
    <div>
      <NewTodo />
      <Todos items={todos} head={head} />
      <To items={todos} head={head} />
    </div>
  );
}

export default App;
