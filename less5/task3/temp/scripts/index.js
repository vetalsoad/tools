/* eslint-disable prettier/prettier */
import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});
/* 
1.Get data from server
2.Save data to front-end storage
*/