import FocusDisplay from "./FocusDisplay";
import OGFocusForm from "./OGFocusForm";
import { useFocus } from "../context/FocusProvider";

function FocusForm() {
  // const getFocus = localStorage.getItem("focus");
  const { focus } = useFocus();

  // console.log(focus);
  return <>{focus ? <FocusDisplay /> : <OGFocusForm />}</>;
}

export default FocusForm;
