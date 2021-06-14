import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, updatedTasks, categories }) {
  const [updatedForm, setUpdatedForm] = useState({
    text: "",
    category: "Code"
  });

  const updatedCategories = categories.slice(1);

  const categoriesArray = updatedCategories.map(category => {
    return <option key={category} value={category}>{category}</option>
  })

  const handleUpdateForm = event => {
    const formUpdate = {
      ...updatedForm,
      [event.target.name]: event.target.value
    }
    setUpdatedForm(formUpdate);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    const appendedTasks = [...updatedTasks, updatedForm];

    onTaskFormSubmit(appendedTasks);
  }

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input value={updatedForm.text} onChange={handleUpdateForm} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={updatedForm.category} onChange={handleUpdateForm} name="category">
          {categoriesArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
