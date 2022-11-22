import { mainFolder } from "./folders";

export { displayFolders } 

function displayFolders() {
    for(let i = 0; i < mainFolder.length; i++) {
        createNeededElements(mainFolder[i]);
    }
}


/* function createDOMTask() {
    createNeededElements()
} */

function createNeededElements(e) {
    let tasksContainer = document.querySelector(".tasks-container")
    let taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    let taskName = document.createElement("p")
    taskContainer.appendChild(taskName);
    taskName.classList.add("task-name")
    taskName.innerHTML = e.title;

    tasksContainer.appendChild(taskContainer);



}