import React, { useState } from "react";
import { addTask } from "./Store";


function AddTask() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  function handleAddTask() {
    if (title && description && dueDate && priority) {
      const task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        done: false,
      };

      addTask(task);

      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("");
    }
  }

  return (
    <>
      <div>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description : </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date : </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority : </label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </>
  );
}

export default AddTask;
