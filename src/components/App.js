import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");

console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, settasks] = useState(TASKS)
  const [category, setCategory] = useState('All')
  function addTask(newtask){
    settasks([...tasks, newtask])
  }
  function removeTask(txt){
    settasks(tasks.filter((task) => task.text !== txt))
  }
  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={setCategory} selectedCategory={category}/>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== 'All')}  addnewTask={addTask}/>
      <TaskList handleremoveTask={removeTask} tasks={visibleTasks} />
    </div>
  );
}

export default App;
