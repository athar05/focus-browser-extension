import React, { useState, useEffect } from "react";

function Clock() {
  const locale = "en";
  const getDate = new Date();
  const [today, setDate] = useState(getDate);
  const userName = localStorage.getItem("name");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
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
