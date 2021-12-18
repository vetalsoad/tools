const listElem = document.querySelector(".list");

const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Pick up Tom from airport", done: false },
  { id: 3, text: "Visit party", done: false },
  { id: 4, text: "Visit doctor", done: true },
  { id: 5, text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;

      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);



function updateTaskHandler(event) {
  if (!event.target.classList.contains("list__item-checkbox")) {
    return;
  }
  const { id } = event.target.dataset;
  const task = tasks.find((el) => el.id === +id);
  // task.done = event.target.checked;
  task.done = !task.done;
  renderTasks(tasks);
}


const res = listElem.addEventListener("click", updateTaskHandler);


const createTaskBtn = document.querySelector(".create-task-btn");

function createTaskHandler(event) {
  const taskInputElem = document.querySelector(".task-input");
  const newValueText = taskInputElem.value;
  if (newValueText === "") {
    return;
  }
  console.log(newValueText);
  tasks.push({ text: newValueText, done: false, id: Math.random() });
  renderTasks(tasks);
}

const createTask = createTaskBtn.addEventListener("click", createTaskHandler);
