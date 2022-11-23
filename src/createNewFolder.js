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

import { displaySwitchFolders } from "./displayFolders"
import { currentfolder } from "./getFormData"

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
        const that = this
        folderButton.addEventListener("click", function() {
            that.switchMainDisplayFolder();
        });
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

    switch() {
        console.log(this.toDofolder);
    }

    updateDisplay() {

    }

}
