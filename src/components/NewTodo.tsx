import React from "react";

const NewTodo: React.FC<{}> = () => {
  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
