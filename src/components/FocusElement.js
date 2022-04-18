import FocusDisplay from "./FocusDisplay";
import FocusForm from "./FocusForm";
import { useFocus } from "../context/FocusProvider";

function FocusElement() {
  const { focus, setFocus } = useFocus();
  const localFocusMessage = localStorage.getItem("focus");
  if (localFocusMessage) setFocus(localFocusMessage);
  return <>{focus ? <FocusDisplay /> : <FocusForm />}</>;
}

export default FocusElement;
