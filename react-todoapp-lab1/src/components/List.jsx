import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useSnapshot } from "valtio";
import { store, sortByPriority, sortByDueDate, sortByTitle } from "./Store";
import { navigate } from "raviger";

export default function List() {
  const snap = useSnapshot(store);
  const items = snap.tasks.map((element, index) => (
    <li key={index}>
      <Task index={index} task={element} />
    </li>
  ));

  return (
    <>
      <button onClick={() => sortByPriority()}>Sort by priority</button>
      <button onClick={() => sortByDueDate()}>Sort by due date</button>
      <button onClick={() => sortByTitle()}>Sort by title</button>
      <h3>The list</h3>
      <ol>{items}</ol>
    </>
  );
}
