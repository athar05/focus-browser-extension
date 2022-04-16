import { useState } from "react";
import Quote from "../components/Quote";
import Clock from "../components/Clock";
import TodoForm from "../components/FocusForm";
import FocusItem from "../components/FocusItem";

function Focus() {
  const [focusItem, setFocusItem] = useState([{ id: null, task: "" }]);
  const addTodo = (newTodoText) => {
    setFocusItem([...focusItem, { id: focusItem.id + 1, task: newTodoText }]);
  };
  return (
    <div>
      <>
        <Quote />
      </>
      <>
        <Clock />
      </>
      <>
        <TodoForm addTodo={addTodo} />
      </>
      <>
        <FocusItem focusItem={focusItem} />
      </>
    </div>
  );
}

export default Focus;
