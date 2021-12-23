import { renderTasks } from "./renderer.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";
export const onDeleteTask = event => {
  const taskId = event.target.dataset.id;
  deleteTask(taskId).then(getTasksList).then(renderTasks);
};