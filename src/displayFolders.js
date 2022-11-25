/* eslint-disable */
import { mainFolder } from './folders';

export function displayFolders(ok) {
  createNeededElements(ok);
}

export function displaySwitchFolders(folder) {
  const currentTaskContainers = document.querySelectorAll('.task-container');
  currentTaskContainers.forEach((e) => e.remove());
  folder.forEach((e) => createNeededElements(e));
}

/* function createDOMTask() {
    createNeededElements()
} */

function createNeededElements(e) {
  const tasksContainer = document.querySelector('.tasks-container');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  const taskName = document.createElement('p');
  taskContainer.appendChild(taskName);
  taskName.classList.add('task-name');
  taskName.innerHTML = e.title;
  const div = document.createElement('div');
  const date = document.createElement('p');
  date.innerHTML = e.dueDate;
  date.classList.add('task-date');
  taskContainer.appendChild(date);

  e.storeDomElement(taskContainer);

  div.classList.add('task-logos');

  const span = createIcons();
  e.storeIcons(span);
  span.forEach((e) => div.appendChild(e));
  taskContainer.appendChild(div);
  tasksContainer.appendChild(taskContainer);
}

function createIcons() {
  const arrayOfSpans = [];
  for (let i = 1; i <= 3; i++) {
    const span = document.createElement('span');
    const img = document.createElement('img');
    span.appendChild(img);
    arrayOfSpans.push(span);
  }

  arrayOfSpans[0].firstElementChild.src = 'img/edit.png';
  arrayOfSpans[0].classList.add('edit');
  arrayOfSpans[2].firstElementChild.src = 'img/trash.png';
  arrayOfSpans[2].classList.add('trash');
  arrayOfSpans[1].firstElementChild.src = 'img/info.svg  ';
  arrayOfSpans[1].classList.add('info');
  return arrayOfSpans;
}
