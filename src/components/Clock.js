import React, { useState, useEffect } from "react";
// import { useTime } from "../context/TimeProvider";

function Clock() {
  const locale = "en";
  const getDate = new Date();
  const [today, setDate] = useState(getDate); // Save the current date to be able to trigger an update

  const userName = localStorage.getItem("name");

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  return (
    <div className="time-component">
      {wish} {userName}!<div> {time}</div>
    </div>
  );
}

export default Clock;
