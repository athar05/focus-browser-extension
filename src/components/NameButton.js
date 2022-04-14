function NameButton() {
  const storedName = localStorage.getItem("name");
  console.log("storedName");
  return (
    <div className="welcome-message-component">
      <h1>Welcome, {storedName}! </h1>
      <button className="name-page-button">Proceed</button>;
    </div>
  );
}

export default NameButton;
