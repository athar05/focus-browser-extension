import React from "react";
import TodoInputState from "../custom-hooks/TodoInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = TodoInputState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <input value={value} onChange={handleChange} />
    </form>
  );
}

export default TodoForm;
