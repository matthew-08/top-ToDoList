import { newToDo } from "./addToDo";
import { addToMainFolder } from "./folders";
import { createFolder } from "./createNewFolder";
import { popUp } from "./popup";

const addTaskButton = document.getElementById("add-task")
addTaskButton.addEventListener("click", popUp);

const createFolderButton = document.getElementById("createFolder");
createFolderButton.addEventListener("click", popUp);



/* checkForErrors(ok); */