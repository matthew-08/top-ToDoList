import { newToDo } from "./addToDo";
import { addToMainFolder } from "./folders";

export function getFormData(form) {
    let k = form
    let formData = new FormData(k)
    let object = Object.fromEntries(formData)
    
    let title = object.title
    let description = object.description
    let dueDate = object.dueDate
    let priority = object.priority

    assignFormData(title, description, dueDate, priority);
}

function assignFormData(title, description, dueDate, priority) {
    
    let toDo = new newToDo(title, description, dueDate, priority);
    addToMainFolder().add(toDo);
}

