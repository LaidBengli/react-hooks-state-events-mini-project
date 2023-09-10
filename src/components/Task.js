import React from "react";

function Task({text,category, removetask}) {
  function handleclick() {
    removetask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"onClick={handleclick}>X</button>
    </div>
  );
}

export default Task;
