import React from "react";

function Task({ text, category, updatedTasks, onUpdateTasks }) {
  const handleDelete = event => {
    const newUpdatedTasks = updatedTasks.filter(task => task.text !== event.target.previousSibling.textContent);
    
    onUpdateTasks(newUpdatedTasks);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
