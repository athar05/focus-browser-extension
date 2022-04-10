import logo from "./logo.svg";
import "./App.css";
import Name from "./pages/Name";
import { Images } from "../src/backend/images";

function App() {
  const randNum = Math.floor(Math.random() * Math.floor(Images.length));
  console.log(Images[randNum].img);
  const randImage = Images[randNum].img;
  return (
    <div className="App" style={{ backgroundImage: `url("${randImage}")` }}>
      <Name />
    </div>
  );
}
export default App;
