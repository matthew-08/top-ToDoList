export function createFolder(folder) {
    const newFolder = [ ]
    newFolderDom(folder)
    return newFolder
    
}

function newFolderDom(folder) {
    const appendHere = document.querySelector(".folders-container")
    let folderButton = document.createElement("a")
    folderButton.classList.add("menu-link-item")
    folderButton.textContent = folder
    appendHere.appendChild(folderButton)
}