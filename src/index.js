import { newToDo } from "./addToDo";
import { addToMainFolder } from "./folders";
import { createFolder } from "./createNewFolder";
import { popUp } from "./popup";

const addTaskButton = document.getElementById("add-task")
addTaskButton.addEventListener("click", popUp);




let newFolder = createFolder("Folder1")
/* checkForErrors(ok); */