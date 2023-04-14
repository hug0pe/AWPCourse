import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "raviger";
import { changeDone, DeleteTask } from "./Store";


export default function Task(props) {
  const [task, setTask] = useState(props.task);
  const navigate = useNavigate();


  function handleEdit() {
    navigate(`/edit/${task.id}`);
  }
  

  function handleChangeDone() {
    console.log("task.done",task.done);
    const updatedTask = { ...task, done: !task.done };  
    setTask(updatedTask);
    console.log("updatedTask",updatedTask);
    changeDone(updatedTask);
  }  

  return (
    <>
      <input type="checkbox" checked={task.done} onChange={handleChangeDone} />
      <span
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.title} - {task.description} - {task.dueDate} - {task.priority}
      </span>
      <button onClick={handleChangeDone}>
        {task.done ? "Undone" : "Done"}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => DeleteTask(props.index)}>Delete</button>
    </>
  );
}
