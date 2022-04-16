import React from "react";

function FocusItem({ focusItem }) {
  return (
    <div>
      {focusItem.map((item) => (
        <h2 key={item.id}>
          {" "}
          Your Focus For Today Is <b>{item.task}</b>
        </h2>
      ))}
    </div>
  );
}

export default FocusItem;
