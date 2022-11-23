import { newToDo } from "./addToDo";
import { addToMainFolder, addFolder, } from "./folders";
import { displayFolders } from "./displayFolders";
import { createFolder, folder } from "./createNewFolder";



export let currentfolder = ""

export function getFormData(form, buttonType, currentFolder) {
    let k = form
    let formData = new FormData(k)
    let object = Object.fromEntries(formData)
    
    let title = object.title
    let description = object.description
    let dueDate = object.dueDate
    let priority = object.priority
    if (buttonType === "addTask") {
    assignFormData(title, description, dueDate, priority, currentFolder);
    }
    else {
        newFolder(title);
    }
}

function assignFormData(title, description, dueDate, priority, currentFolder) {
    

    let toDo = new newToDo(title, description, dueDate, priority);
    addToMainFolder().add(toDo);
    if (currentFolder !== "") {
        currentFolder.addToFolder(toDo);
        currentFolder.switchMainDisplayFolder();
    } else {
    displayFolders(toDo); 
    }
}

function newFolder(title) {
    let newFolder = new folder(title);
    currentfolder = newFolder;
    newFolder.newFolderDom();
    newFolder.switchMainDisplayFolder();

}
