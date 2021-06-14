import React, { useState, useEffect } from "react";
import Button from "./Button";

function CategoryFilter({ updatedTasks, onFilterTasks, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChangeSelected = newSelected => {
    setSelectedCategory(newSelected);
  }

  const categoriesArray = categories.map(category => {
    return <Button selectedCategory={selectedCategory} onChangeSelected={handleChangeSelected} key={category} category={category} />
  });

  useEffect(() => {
    const filteredTasks = updatedTasks.filter(task => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return task.category === selectedCategory;
      }
    })
  
    onFilterTasks(filteredTasks);
  }, [selectedCategory, updatedTasks]);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray}
    </div>
  );
}

export default CategoryFilter;
