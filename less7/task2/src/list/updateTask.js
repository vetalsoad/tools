/* eslint-disable prettier/prettier */
import { renderTasks } from "./renderer.js";
import { getTasksList, updateTask } from "./tasksGateway.js";

export const onToggleTask = (event) => {
  const taskId = event.target.dataset.id;
  const { text, createDate } = getTasksList().then((tasks) =>
    tasks.find((task) => task.id === taskId)
  );
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  console.log(getTasksList());

  updateTask(updatedTask, taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      renderTasks();
    });
};
