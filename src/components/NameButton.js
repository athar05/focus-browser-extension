import { Links, Link } from "react-router-dom";

function NameButton() {
  const storedName = localStorage.getItem("name");
  console.log("storedName");
  return (
    <div className="welcome-message-component">
      <div className="welcome-message">
        <h1>Welcome, {storedName}! </h1>
      </div>
      <Link to="/focus">
        <button className="name-page-button">Proceed</button>;
      </Link>
    </div>
  );
}

export default NameButton;
