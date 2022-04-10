import React, { useState, useEffect } from "react";
import { Images } from "../../public/backend/images";

function Name() {
  const randImage = Math.floor(Math.random() * Math.floor(Images.length));
  console.log(randImage);
  const storedName = localStorage.getItem("name");
  console.log(storedName);
  // useEffect(console.log("HEllo"), []);
  return (
    <div>
      <h1>Hello, please enter your name</h1>
    </div>
  );
}

export default Name;
