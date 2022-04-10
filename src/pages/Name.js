import React, { useState, useEffect } from "react";
import { Images } from "../backend/images";
import NameForm from "../components/NameForm";
import NameButton from "../components/NameButton";

function Name() {
  const storedName = localStorage.getItem("name");
  console.log(storedName);
  return <div>{storedName ? <NameButton /> : <NameForm />}</div>;
}

export default Name;
