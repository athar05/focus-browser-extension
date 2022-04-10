import React, { useState, useEffect } from "react";
function Name() {
  const storedName = localStorage.getItem("name");
  console.log(storedName);
  return (
    <div>
      <h1>Hello, please enter your name</h1>
    </div>
  );
}

export default Name;
