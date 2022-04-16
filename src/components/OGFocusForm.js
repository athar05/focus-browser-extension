import React, { useState } from "react";

function OGFocusForm() {
  const [focus, setFocus] = useState(null);
  const today = new Date();
  return (
    <div>
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
              setFocus(localStorage.getItem("focus"));
              console.log(focus);
            }
          }}
        />
      </form>
    </div>
  );
}

export default OGFocusForm;
