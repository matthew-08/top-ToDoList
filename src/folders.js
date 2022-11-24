import { displayFolders } from "./displayFolders";
export const mainFolder = [ ]
const extraFolders = {

}


export function addToMainFolder(ok) {
    

    function add(ok) {
            mainFolder.push(ok);
    }


    function checkMainFolder() {
        console.log(mainFolder);
    }

    function removeFromMainFolder(item) {
        let index = mainFolder.indexOf(item);
        mainFolder.splice(index, 1);
    }

    return { add, mainFolder, addFolder, removeFromMainFolder}
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

    getToday() {
        return this.today;
    },
    
    removeWeek(item) {
        let index = this.week.indexOf(item);
        this.week.splice(index, 1);
    },

    removeToday(item) {
        let index = this.week.indexOf(item);
        this.today.splice(index, 1)
    }
}


