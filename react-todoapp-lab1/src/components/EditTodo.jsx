import React, { useState, useEffect } from "react";
import { useQueryParams, navigate } from "raviger";
import { useSnapshot } from "valtio";
import { editTask, getTaskById, store } from "./Store";

export default function EditTodo(props) {
  const snap = useSnapshot(store);
  const task = getTaskById(props.id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
    setPriority(task.priority);
  }, [task]);

  function handleSaveTask() {
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
      priority,
    };
    editTask(updatedTask);
    navigate(`/`);
  }
  
  

  function handleTitleChange(event) {
    setTitle(event.target.value);    
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description : </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date : </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={handleDueDateChange}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority : </label>
        <select
          id="priority"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button onClick={handleSaveTask}>Save Task</button>
    </>
  );
}
