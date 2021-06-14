import React from "react";
import Task from "./Task";

function TaskList({ currentFilteredTasks, updatedTasks, onUpdateTasks }) {
  const tasksArray = currentFilteredTasks.map(task => {
    return <Task updatedTasks={updatedTasks} onUpdateTasks={onUpdateTasks} key={task.text} text={task.text} category={task.category} />
  })

  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
