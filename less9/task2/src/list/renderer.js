/* eslint-disable prettier/prettier */
import { getTasksList } from './tasksGateway.js';
import './list.scss';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => a.done - b.done;

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item');
  const checkboxElem = createCheckbox({ done, id });

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  if (done) {
    listItemElem.classList.add('list-item_done');
    textElem.classList.add('list-item__text_done');
  }

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.setAttribute('data-id', id);

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  listElem.innerHTML = '';
  getTasksList().then((tasks) => {
    const tasksElems = tasks.sort(compareTasks).map(createListItem);
    listElem.append(...tasksElems);
  });
};
