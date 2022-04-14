import React from "react";

function NameForm() {
  return (
    <>
      <h1>Hello, what should we call you?</h1>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="input-field"
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              localStorage.setItem("name", e.target.value);
              window.location.reload(false);
            }
          }}
        />
      </form>
    </>
  );
}

export default NameForm;
