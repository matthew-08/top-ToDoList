import { displayFolders } from "./displayFolders";
export const mainFolder = [ ]
const extraFolders = {

}

export function addToMainFolder(ok) {
    

    function add(ok) {
            mainFolder.push(ok);
            checkMainFolder();
    }


    function checkMainFolder() {
        console.log(mainFolder);
    }


    return { add, mainFolder, addFolder}
}

export function addFolder(folder) {
    extraFolders.folder = folder
    console.log(extraFolders)
}