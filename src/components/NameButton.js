import React from "react";

function NameButton() {
  const storedName = localStorage.getItem("name");
  console.log("storedName");
  return (
    <>
      <h1>Welcome, {storedName}! </h1>
      <button className="name-page-button">Proceed</button>;
    </>
  );
}

export default NameButton;
