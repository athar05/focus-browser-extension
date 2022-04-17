import { useState, useContext } from "react";
import FocusContext from "./FocusContext";

const useFocus = () => useContext(FocusContext);

function FocusProvider({ children }) {
  const [focus, setFocus] = useState("");

  return (
    <FocusContext.Provider value={{ focus, setFocus }}>
      {children}
    </FocusContext.Provider>
  );
}

export { FocusProvider, useFocus };
