import { newToDo } from "./addToDo";
import { addToMainFolder, addFolder, } from "./folders";
import { displayFolders, displaySwitchFolders } from "./displayFolders";
import { createFolder, folder } from "./createNewFolder";
import isThisWeek from "date-fns/isThisWeek";
import { isToday } from "date-fns";
import { sideBarFolders } from "./folders";



export let currentfolder = ""

export function getFormData(form, buttonType, currentFolder) {
    let k = form
    let formData = new FormData(k)
    let object = Object.fromEntries(formData)
    
    let title = object.title
    let description = object.description
    let dueDate = object.dueDate
    let priority = object.priority
    if (buttonType === "editTask") {
        let folder = currentFolder.parentFolder;
        console.log(folder.toDofolder)  ;
        currentFolder.editToDo(title, description, dueDate, priority);
        displaySwitchFolders(folder.toDofolder);
    } else if (buttonType === "addTask") {
    assignFormData(title, description, dueDate, priority, currentFolder);
    } else  {
        newFolder(title);
    }
}

function assignFormData(title, description, dueDate, priority, currentFolder) {
    

    let toDo = new newToDo(title, description, dueDate, priority);
    determineDate(toDo);
    addToMainFolder().add(toDo);
    if (currentFolder !== "") {
        currentFolder.addToFolder(toDo);
        currentFolder.switchMainDisplayFolder();
        
    } else {
    displayFolders(toDo); 
    }
}

export function newFolder(title) {
    let newFolder = new folder(title);
    currentfolder = newFolder;
    newFolder.newFolderDom();
    newFolder.switchMainDisplayFolder();

}

function determineDate(toDo) {
    let parsedDate = Date.parse(toDo.dueDate);
    let week = ""
    let today = ""

    if (isThisWeek(parsedDate)) {
        week = true
    }

    if (isToday(parsedDate)){
        today = true
    }

    if (week === true) {
        sideBarFolders.pushToWeek(toDo);
        toDo.addDateFolder("week");

    } if (today === true) {
        sideBarFolders.pushToToday(toDo);
        toDo.addDateFolder("today");
    }

}

