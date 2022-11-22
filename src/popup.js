
import { getFormData } from "./getFormData"

const popupH = document.getElementById("Epopup")

export function popUp(typeOfPopup) {
    let popUp = event.target.id
    const header = document.getElementById("popup-header")
    popupH.style.display = "flex"
    header.textContent = "Add task"


    if (popUp == "add-task") {
        createBoxInput(["Title", "Description", "Due Date", "Priority"]);
        createButtons();
    }
    
}

function createBoxInput(arr) {
    const form = document.getElementById("form")

    arr.map(e => {
        if (e === "Title") {
            const input = document.createElement("input")
            const name = "title"
            input.name = name
            setInputLabel(e, input, name)
        }
        if(e === "Description") {
            const textArea = document.createElement("textarea")
            textArea.name = "description"
            setInputLabel(e, textArea)
            

        }
        if(e === "Due Date") {
            const input = document.createElement("input")
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
function createButtons() {


    let submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList.add("submit-button")
    submitButton.type = "submit"
    submitButton.addEventListener("click", function submit(e) {
        e.preventDefault();
        getFormData(submitButton.form)
        form.innerHTML = " "
        popupH.style.display = "none"

    })


    let cancelButton = document.createElement("button")
    cancelButton.addEventListener("click", function prevent(e) {
        e.preventDefault();
        form.innerHTML = " "
        popupH.style.display = "none"
    } )
    cancelButton.textContent = "Cancel"
    let buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(submitButton);
    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.classList.add("buttons-container")
    const form = document.getElementById("form")
    form.appendChild(buttonsContainer);
    
}

