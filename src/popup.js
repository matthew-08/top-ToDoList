
import { getFormData } from "./getFormData"

import { currentfolder } from "./getFormData"

const popupH = document.getElementById("Epopup")
const popupMain = document.getElementsByClassName("popup-main")
export function popUp(e, toDo) {
    let popUp = event.target.id
    const header = document.getElementById("popup-header")
    popupH.style.display = "flex"


    if (e === "info") {
        header.textContent = "Info"
        createInfoBoxContents(toDo);
        createButtons("info");
        return;
        
    }
    
    if(e === "edit") {
        header.textContent = "Edit"
        createBoxInput(["Title", "Description", "Due Date", "Priority"], "edit", toDo);
        createButtons("editTask", toDo)
    }


    if (popUp == "createFolder") {
        header.textContent = "Create Folder"
        createBoxInput(["Title"])
        popupMain[0].classList.add("createFolder");
        createButtons("createFolder");
    }
 
    if (popUp == "add-task") {
        header.textContent = "Add task"
        createBoxInput(["Title", "Description", "Due Date", "Priority"]);
        createButtons("addTask");
    }
    
}

function createBoxInput(arr, edit, task) {
    const form = document.getElementById("form")
    let a = task;
    console.log(a);
    arr.map(e => {
        if (e === "Title") {
            const input = document.createElement("input")
            if (a !== undefined) {
                input.value = task.title;
            }
            const name = "title"
            input.name = name
            setInputLabel(e, input, name)
        }
        if(e === "Description") {
            const textArea = document.createElement("textarea")
            if (a !== undefined) {
                textArea.value = task.description;
            }
            textArea.name = "description"
            setInputLabel(e, textArea)
            

        }
        if(e === "Due Date") {
            const input = document.createElement("input")
            if (a !== undefined) {
                input.value = task.dueDate;
            }
            input.name = "dueDate"
            input.type = "date"
            setInputLabel(e, input)

        }
        if(e === "Priority") {
            const select = document.createElement("select")
            select.name = "priority";
            function createOption (textContent) {
                let option = document.createElement("option")
                option.textContent = textContent;
                select.appendChild(option);
            }
            createOption("Low");
            createOption("High")
            if (a !== undefined) {
                select.value = task.priority    ;
            }
            
            
            setInputLabel(e, select)

        }
    })
  /*   const inputLabel = document.createElement('label')
    const input = document.createElement("input")
    inputWrapper.appendChild(inputLabel)
    inputWrapper.appendChild(input); */

    function setInputLabel(e, elementToCreate, name) {
        const inputWrapper = document.createElement("div")
        inputWrapper.classList.add("input-wrapper")
        form.appendChild(inputWrapper);
        const inputLabel = document.createElement("label")
        inputLabel.textContent = e
        inputLabel.htmlFor = name
        inputWrapper.appendChild(inputLabel)
        inputWrapper.appendChild(elementToCreate)
        
    }

}
function createButtons(buttonType, task) {

    console.log(task);

    
    let submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList.add("submit-button")
    submitButton.type = "submit"


    submitButton.addEventListener("click", function submit(e) {
        e.preventDefault();
        if (buttonType === "addTask") {
            getFormData(submitButton.form, "addTask", currentfolder)
        } else if (buttonType === "editTask") {
            getFormData(submitButton.form, "editTask", task)
        }
        else {
            getFormData(submitButton.form, "createFolder")
            popupMain[0].classList.remove("createFolder");
        }
            form.innerHTML = " "
            popupH.style.display = "none"

    })


    let cancelButton = document.createElement("button")
    cancelButton.addEventListener("click", function prevent(e,) {
        e.preventDefault();
        let infoContainer = document.querySelector(".info-container");
        console.log(infoContainer);
        let form = document.getElementById("form")
            if (infoContainer !== undefined && form.style.display === "none") {
                    const infoContainer = document.querySelector(".info-container")
                    const form = document.getElementById("form")
                    console.log(form);
                    infoContainer.innerHTML = " "
                    infoContainer.remove();
                    form.style.display = ""
                }
        form.innerHTML = " "
        popupH.style.display = "none"
    } )
    cancelButton.textContent = "Cancel"
    let buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(submitButton);
    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.classList.add("buttons-container")
    if (buttonType === "info") {
        const infoContainer = document.querySelector(".info-container")
        infoContainer.appendChild(buttonsContainer);
        submitButton.remove();
        return
    } 
    const form = document.getElementById("form")
    form.appendChild(buttonsContainer);

    
}


function createInfoBoxContents(toDo) {
    let form = document.getElementById("form");
    form.style.display = "none"
    let container = document.createElement("div");
    container.classList.add("info-container");
    popupMain[0].appendChild(container);

    
    container.appendChild(infoContainer("Title", toDo.title));
    container.appendChild(infoContainer("Description", toDo.description));
    container.appendChild(infoContainer("Due Date", toDo.dueDate));
    container.appendChild(infoContainer("Priority", toDo.priority));
    container.appendChild(infoContainer("Folder", toDo.parentFolder.folder));


}



function infoContainer(left, right) {
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-item");
    let infoLeft = document.createElement("p")
    let infoRight = document.createElement("p");


    infoLeft.textContent = left;
    infoRight.textContent = right;
    if (left === "Description") {
        infoRight.classList.add("desc")
        let descContainer = document.createElement("div")
        descContainer.classList.add("desc-container");
        descContainer.appendChild(infoRight);
        infoContainer.appendChild(infoLeft);
        infoContainer.appendChild(descContainer);
        return infoContainer;
        
    } else 
    
    infoContainer.appendChild(infoLeft);
    infoContainer.appendChild(infoRight);
    return infoContainer;
    

}
