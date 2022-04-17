import FocusDisplay from "./FocusDisplay";
import FocusForm from "./FocusForm";
import { useFocus } from "../context/FocusProvider";

function FocusElement() {
  // const getFocus = localStorage.getItem("focus");
  const { focus } = useFocus();

  // console.log(focus);
  return <>{focus ? <FocusDisplay /> : <FocusForm />}</>;
}

export default FocusElement;
