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



export const sideBarFolders = {

    week: [ ],
    today: [ ],

    pushToWeek(toDo) {
        this.week.push(toDo)
    },

    pushToToday(toDo) {
        this.today.push(toDo);
    },

    pushtoImportant(toDo) {
        important.push(toDo);
    },
    
    getWeek() {
        return this.week;
    },
    
    removeWeek(item) {
        let index = this.week.indexOf(item);
        this.week.splice(index, 1);
    }
}


