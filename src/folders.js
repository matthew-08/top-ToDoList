import { displayFolders } from "./displayFolders";
export const mainFolder = [ ]

export function addToMainFolder(ok) {
    

    function add(ok) {
        mainFolder.push(ok);
        checkMainFolder();
        displayFolders();
    }

    
    function checkMainFolder() {
        console.log(mainFolder);
    }


    return { add, mainFolder,}
}