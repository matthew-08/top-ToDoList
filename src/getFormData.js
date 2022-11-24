/* eslint-disable */
import isThisWeek from 'date-fns/isThisWeek';
import { isToday } from 'date-fns';
import { newToDo } from './addToDo';
import { addToMainFolder, addFolder, sideBarFolders } from './folders';
import { displayFolders, displaySwitchFolders } from './displayFolders';
import { createFolder, folder } from './createNewFolder';

export let currentfolder = '';

export function getFormData(form, buttonType, currentFolder) {
  const k = form;
  const formData = new FormData(k);
  const object = Object.fromEntries(formData);

  const { title } = object;
  const { description } = object;
  const { dueDate } = object;
  const { priority } = object;
  if (buttonType === 'editTask') {
    const folder = currentFolder.parentFolder;
    console.log(folder.toDofolder);
    currentFolder.editToDo(title, description, dueDate, priority);
    displaySwitchFolders(folder.toDofolder);
  } else if (buttonType === 'addTask') {
    assignFormData(title, description, dueDate, priority, currentFolder);
  } else {
    newFolder(title);
  }
}

function assignFormData(title, description, dueDate, priority, currentFolder) {
  const toDo = new newToDo(title, description, dueDate, priority);
  determineDate(toDo);
  addToMainFolder().add(toDo);
  if (currentFolder !== '') {
    currentFolder.addToFolder(toDo);
    currentFolder.switchMainDisplayFolder();
  } else {
    displayFolders(toDo);
  }
}

export function newFolder(title) {
  const newFolder = new folder(title);
  currentfolder = newFolder;
  newFolder.newFolderDom();
  newFolder.switchMainDisplayFolder();
}

function determineDate(toDo) {
  const parsedDate = Date.parse(toDo.dueDate);
  let week = '';
  let today = '';

  if (isThisWeek(parsedDate)) {
    week = true;
  }

  if (isToday(parsedDate)) {
    today = true;
  }

  if (week === true) {
    sideBarFolders.pushToWeek(toDo);
    toDo.addDateFolder('week');
  } if (today === true) {
    sideBarFolders.pushToToday(toDo);
    toDo.addDateFolder('today');
  }
}
