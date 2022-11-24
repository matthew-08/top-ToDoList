import { folder } from "./createNewFolder"

import { popUp } from "./popup"

export class newToDo {

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    storeIcons(span) {
        const that = this
        const arrayOfIcons = Array.from(span);
        arrayOfIcons.forEach(icon => icon.addEventListener("click", function (e){
            let icon = event.currentTarget;
            if (icon.classList.contains("trash")) {
                that.delete();
                that.delete2();
            } else if (icon.classList.contains("edit")) {
                popUp("edit", that);
                
            } else {
                popUp("info", that);
            }
        }))
    }
    storeDomElement(taskContainer) {
        console.log(taskContainer);
        this.taskContainer = taskContainer;

    }
    delete() {
        console.log(this.folder); 
        this.taskContainer.remove();
        console.log(this.folder);      

    }

    delete2() {
        console.log(this.parentFolder);
        this.parentFolder.deleteFromFolder(this);
    }

    addParentFolder(e) {
        this.parentFolder = e;
        console.log(this.parentFolder);   
    }
    
    editToDo(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    

}