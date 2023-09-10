import React from "react";
import Task from "./Task";

function TaskList({tasks,handleremoveTask}) {
  return (
    <div className="tasks">
      {tasks.map((task,index) => (
       <Task removetask={handleremoveTask} key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
