import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import Clock from "../components/Clock";
import FocusForm from "../components/FocusForm";
import FocusDisplay from "../components/FocusDisplay";

function Focus() {
  const [storageExist, setStorageExist] = useState(false);

  // const [focusItem, setFocusItem] = useState([{ id: null, task: "" }]);
  // const addTodo = (newTodoText) => {
  //   setFocusItem([...focusItem, { id: focusItem.id + 1, task: newTodoText }]);
  // };
  return (
    <div>
      <>
        <Quote />
      </>
      <>
        <Clock />
      </>
      <>
        <FocusForm />
      </>
    </div>
  );
}

export default Focus;
