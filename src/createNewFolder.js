/* eslint-disable */
/* export function createFolder(folder) {
    const newFolder = [ ]
    newFolderDom(folder);
    
    return newFolder
    
}

function newFolderDom(folder) {
    const appendHere = document.querySelector(".folders-container")
    let folderButton = document.createElement("a")
    folderButton.classList.add("menu-link-item")
    folderButton.textContent = folder
    appendHere.appendChild(folderButton)
} */
/* eslint-disable */

import { displaySwitchFolders } from "./displayFolders"
import { addToMainFolder, mainFolder, sideBarFolders } from "./folders"
import { currentfolder, getFormData } from "./getFormData"
import { popUp } from "./popup"
import { setHeader } from "./sidebar-links"


export class folder {
    toDofolder = [

    ]

    constructor(folder) {
        this.folder = folder
    }
    
    setHeader() {
        const header = document.querySelector(".main-title")
        header.textContent = this.folder;
    }

    newFolderDom(folder) {
        this.setHeader();
        this.switchMainDisplayFolder(this.toDofolder);
        const appendHere = document.querySelector(".folders-container")
        let folderButton = document.createElement("a")
        folderButton.classList.add("menu-link-item")
        folderButton.textContent = this.folder;
        appendHere.appendChild(folderButton)
        let icon = new Image(20, 20)
        icon.src = "img/trash.png"
        folderButton.appendChild(icon);
        icon.addEventListener("click", function() {
            that.deleteFolder();
        })
        const that = this
        folderButton.addEventListener("click", function() {
            that.switchMainDisplayFolder();
        });
        this.folderDom = folderButton;
    }

    addToFolder(toDo) {
        this.toDofolder.push(toDo)
        console.log(this.toDofolder);
        toDo.addParentFolder(this);
    }

    deleteFromFolder(itemToDelete) {
        let index = this.toDofolder.indexOf(itemToDelete)
        this.toDofolder.splice(index, 1);
    }

    switchMainDisplayFolder() {
        currentfolder = this;
        console.log(this.toDofolder);
        displaySwitchFolders(this.toDofolder);
        this.setHeader();
    }

    deleteFolder() {
        popUp("warning", this);
    }

    deleteToDo() { // Deletes any toDo tasks inside this folder from "All" and "Today" / "Week" folders
        let folder = this.toDofolder;
        folder.forEach(e => 
        {
            addToMainFolder().removeFromMainFolder(e)
            if (e.inWeekFolder === true) {
                sideBarFolders.removeWeek(e);
            }
            if (e.inTodayFolder === true) {
                sideBarFolders.removeToday(e);
            }
        });
        this.deleteDOM();
    }

    deleteDOM() {
        this.folderDom.remove();
        this.switchAway();
    }

    switchAway() {
        displaySwitchFolders(mainFolder);
        setHeader("All");
    }

}
