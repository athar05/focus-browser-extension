import React, { useState } from "react";
import { useFocus } from "../context/FocusProvider";

function OGFocusForm() {
  // is the local storage exist?
  // const [focus, setFocus] = useState(null);
  const today = new Date();

  const { focus, setFocus } = useFocus();

  return (
    <div className="focus-form">
      {" "}
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
              localStorage.setItem(
                "focus",
                JSON.stringify({
                  focus: e.target.value,
                  date: today.getDate(),
                })
              );
              localStorage.focusDate = today.getDate();
              localStorage.focusString = e.target.value;
              // setFocus(localStorage.getItem("focus"));
              setFocus(localStorage.getItem("focusString"));
            }
          }}
        />
      </form>
    </div>
  );
}

export default OGFocusForm;
