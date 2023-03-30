import { useRef } from "react";

const NewTodo: React.FC<{ onSubmit: (text: string) => void }> = ({
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    //console.log(enteredText);
    if (enteredText.trim().length === 0) {
      return;
    }
    onSubmit(enteredText);
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
