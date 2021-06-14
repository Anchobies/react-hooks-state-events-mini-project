import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const initialTasks = [...TASKS];
  const [updatedTasks, setUpdatedTasks] = useState(initialTasks)
  const [currentFilteredTasks, setCurrentFilteredTasks] = useState(updatedTasks);

  const handleFilterTasks = filtered => {
    setCurrentFilteredTasks(filtered);
  }

  const handleUpdateTasks = updated => {
    setUpdatedTasks(updated);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updatedTasks={updatedTasks} onFilterTasks={handleFilterTasks} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={handleUpdateTasks} updatedTasks={updatedTasks} categories={CATEGORIES} />
      <TaskList currentFilteredTasks={currentFilteredTasks} updatedTasks={updatedTasks} onUpdateTasks={handleUpdateTasks} />
    </div>
  );
}

export default App;
