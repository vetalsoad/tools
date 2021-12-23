import { initTodoListHandlers } from "./list/todoList.js";
import { renderTasks } from "./list/renderer.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  initTodoListHandlers();
});
