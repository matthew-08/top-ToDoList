import { newToDo } from "./addToDo";
import { addToMainFolder } from "./folders";
import { displayFolders } from "./displayFolders";
import { createFolder } from "./createNewFolder";

export function getFormData(form, buttonType) {
    let k = form
    let formData = new FormData(k)
    let object = Object.fromEntries(formData)
    
    let title = object.title
    let description = object.description
    let dueDate = object.dueDate
    let priority = object.priority
    if (buttonType === "addTask") {
    assignFormData(title, description, dueDate, priority);
    }
    else {
        newFolder(title);
    }
}

function assignFormData(title, description, dueDate, priority) {
    
    let toDo = new newToDo(title, description, dueDate, priority);
    addToMainFolder().add(toDo);
    displayFolders(toDo); 
}

function newFolder(title) {
    let newFolder = createFolder(title);
    
}
