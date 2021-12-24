/* eslint-disable prettier/prettier */

import { renderTasks } from './renderer.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) return;

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(renderTasks);
};

/* 1.Prepare data
2.write data to db
3.read new data from server
4.Save new data to front-end storage
5. update UI based on new data */
