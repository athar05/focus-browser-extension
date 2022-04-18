import React, { useState } from "react";
import { useFocus } from "../context/FocusProvider";

function FocusForm() {
  // is the local storage exist?
  // const [focus, setFocus] = useState(null);
  const today = new Date();

  const { focus, setFocus } = useFocus();

  const [focusInput, setFocusInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("focus", focusInput);
    setFocus(localStorage.getItem("focus"));
    console.log(localStorage.getItem("focus"));
  };

  return (
    <div className="focus-form">
      {" "}
      <h2>What is your main focus today?</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          onChange={(e) => setFocusInput(e.target.value)}
        />
        <button type="submit" className="focus-button">
          Add Focus
        </button>
      </form>
    </div>
  );
}

export default FocusForm;
