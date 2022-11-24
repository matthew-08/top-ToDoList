import { folder } from "./createNewFolder"

import { popUp } from "./popup"

import { addToMainFolder, sideBarFolders } from "./folders"

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
        this.taskContainer = taskContainer;

    }
    delete() {
        this.taskContainer.remove();    

    }

    delete2() {
        console.log(this.parentFolder);
        this.parentFolder.deleteFromFolder(this);
        if (this.inWeekFolder === true) {
            sideBarFolders.removeWeek(this);
        }
        if (this.inTodayFolder === true) {
            sideBarFolders.removeToday(this);
        }
        addToMainFolder().removeFromMainFolder(this);
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
    
    addDateFolder(folder) {
        if (folder === "week") {
            this.inWeekFolder = true;
        } 
        if (folder === "today") {
            this.inTodayFolder = true;
        }
    }

}