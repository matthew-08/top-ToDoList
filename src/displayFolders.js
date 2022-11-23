
import { mainFolder } from "./folders";


export function displayFolders(ok) {

        createNeededElements(ok)
}

export function displaySwitchFolders(folder) {
    let currentTaskContainers = document.querySelectorAll(".task-container")
    currentTaskContainers.forEach(e => e.remove());
    folder.forEach(e => createNeededElements(e));


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
    let div = document.createElement("div")
    let date = document.createElement("p")
    date.innerHTML = e.dueDate
    date.classList.add("task-date");
    taskContainer.appendChild(date);

    div.classList.add("task-logos")

    let span = createIcons();
    span.forEach(e => div.appendChild(e));
    taskContainer.appendChild(div); 
    tasksContainer.appendChild(taskContainer);


    


}

function createIcons() {
    let arrayOfSpans = [ ]
    for (let i = 1; i <= 3; i ++) {
        let span = document.createElement('span')
        let img = document.createElement("img");
        span.appendChild(img);
        arrayOfSpans.push(span);
    }


    arrayOfSpans[0].firstElementChild.src = "/img/edit.png"
    arrayOfSpans[0].classList.add("edit")
    arrayOfSpans[2].firstElementChild.src = "/img/trash.png"
    arrayOfSpans[2].classList.add("trash")
    arrayOfSpans[1].firstElementChild.src = "/img/info.svg  "
    arrayOfSpans[1].classList.add("info")
    return arrayOfSpans
}