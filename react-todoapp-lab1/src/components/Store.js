import { proxy } from "valtio";

export const store = proxy( {tasks: [{
        id: 0,
        title: "Learn js",
        description: "Learn JavaScript programming language",
        dueDate: "2023-06-01",
        priority: "High",
        done: false,
      },
      {
        id: 1,
        title: "Clean bedroom",
        description: "Clean my bedroom",
        dueDate: "2023-05-20",
        priority: "Low",
        done: true,
      },
      {
        id: 2,
        title: "TODO ??",
        description: "Figure out what to do next",
        dueDate: "2023-04-20",
        priority: "Medium",
        done: false,
      }], 

    })

export function getTaskById(id){
  return store.tasks.find((element) => {
    return element.id == id;
  })
}

export const addTask = (task) => {
  const newTask = {
    id: store.tasks.length,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    done: false,
  };
  store.tasks = [...store.tasks, newTask];
}

export function editTask(task){
  const newTasks = [...store.tasks];
  newTasks[task.id] = { ...newTasks[task.id], ...task };

  store.tasks = newTasks;
}

export function changeDone(updatedTask) {
  const newTasks = [...store.tasks];
  newTasks[updatedTask.id] = { ...newTasks[updatedTask.id],  done: updatedTask.done };
  store.tasks = newTasks;
}

export function DeleteTask(index) {
  store.tasks.splice(index, 1);
}

export function sortByPriority() {
  const sortedTasks = store.tasks;
  const priorities = { Low: 3, Medium: 2, High: 1 };

  sortedTasks.sort((a, b) => { 
    return priorities[a.priority] - priorities[b.priority];
  });

  store.tasks = [...sortedTasks];
  console.log("sortByPriority",store.tasks, sortedTasks);
  return store.tasks;
}


export function sortByDueDate() {
  const sortedTasks = store.tasks;

  sortedTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    return dateA - dateB;
  });

  store.tasks = [...sortedTasks];
  console.log("sortByDueDate", store.tasks, sortedTasks);
  return store.tasks;
}



export function sortByTitle() {
  const sortedTasks = store.tasks;

  sortedTasks.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  store.tasks = [...sortedTasks];
  console.log("sortByTitle", store.tasks, sortedTasks);
  return store.tasks;
}



