/* eslint-disable */
import { newToDo } from "./addToDo";
import { addToMainFolder } from "./folders";
import { createFolder, folder } from "./createNewFolder";
import { popUp } from "./popup";
import { ok } from "./sidebar-links";
import { newFolder } from "./getFormData";

const addTaskButton = document.getElementById("add-task")
addTaskButton.addEventListener("click", popUp);

const createFolderButton = document.getElementById("createFolder");
createFolderButton.addEventListener("click", popUp);

export const storeFolder = JSON.parse(localStorage.getItem("folders")) || [];


ok();
newFolder("Default")





/* checkForErrors(ok); */