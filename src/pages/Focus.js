import { useState } from "react";
import Quote from "../components/Quote";
import Clock from "../components/Clock";
import FocusForm from "../components/FocusForm";
import Weather from "../components/Weather";

function Focus() {
  const [storageExist, setStorageExist] = useState(false);

  // const [focusItem, setFocusItem] = useState([{ id: null, task: "" }]);
  // const addTodo = (newTodoText) => {
  //   setFocusItem([...focusItem, { id: focusItem.id + 1, task: newTodoText }]);
  // };
  return (
    <div className="focus-parent">
      <div className="weather-component">
        <Weather />
      </div>
      <div className="clock-component">
        <Clock />
      </div>
      <div className="focus-form-component">
        <FocusForm />
      </div>
      <div className="quote-component">
        <Quote />
      </div>
    </div>
  );
}

export default Focus;
