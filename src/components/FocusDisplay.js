import React from "react";

function FocusDisplay() {
  const mainFocus = localStorage.getItem("focusString");
  return <h2>Your Focus For Today is {mainFocus}</h2>;
}

export default FocusDisplay;
