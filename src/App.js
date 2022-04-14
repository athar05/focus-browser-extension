import Name from "./pages/Name";
import { Images } from "../src/backend/images";
import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </div>
  );
}
export default App;
