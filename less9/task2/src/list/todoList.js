/* eslint-disable prettier/prettier */

import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

const handleListClick = (event) => {
  const isDeleteButton = event.target.classList.contains(
    'list-item__delete-btn',
  );

  if (isDeleteButton) {
    onDeleteTask(event);
  }

  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (isCheckbox) {
    onToggleTask(event);
  }
};

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClick);
};
