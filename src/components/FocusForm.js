import { useState, useEffect } from "react";
import FocusDisplay from "./FocusDisplay";
import OGFocusForm from "./OGFocusForm";

function FocusForm() {
  const getFocus = localStorage.getItem("focus");

  return (
    <>
      {!getFocus ? (
        <>
          <OGFocusForm />
        </>
      ) : (
        <>
          <FocusDisplay />
        </>
      )}
    </>
  );
}

export default FocusForm;
