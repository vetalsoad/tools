import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/renderer';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  initTodoListHandlers();
});
