import { useState } from "react";

function FocusForm({ addTodo }) {
  const [focus, setFocus] = useState("");
  const mainFocus = localStorage.getItem("focus");
  return (
    <>
      <h2>What is your main focus today?</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="input-field"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              localStorage.setItem("focus", e.target.value);
            }
          }}
        />

        <h2>Your Focus For Today is {mainFocus}</h2>
      </form>
    </>
  );
}

export default FocusForm;
