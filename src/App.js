import Name from "./pages/Name";
import { Images } from "../src/backend/images";
import { Routes, Route } from "react-router-dom";
import Focus from "./pages/Focus";

function App() {
  const randNum = Math.floor(Math.random() * Math.floor(Images.length));
  console.log(Images[randNum].img);
  const randImage = Images[randNum].img;
  return (
    <div
      className="app-component"
      style={{ backgroundImage: `url("${randImage}")` }}
    >
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </div>
  );
}
export default App;
