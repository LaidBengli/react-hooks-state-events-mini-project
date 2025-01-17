import React from "react";
import { useState } from "react";
function NewTaskForm({categories, addnewTask}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  function handleSubmit(e){
    e.preventDefault();
      addnewTask({
        text,
        category
      })
      setText('')
      setCategory('Code')
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) =>setCategory(e.target.value)} name="category">
          {categories.map((cat,index) => (
            <option value={cat} key={index} >{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
