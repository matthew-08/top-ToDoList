import { mainFolder, sideBarFolders } from "./folders";
import { displaySwitchFolders } from "./displayFolders";

export function ok() {const sideBarLinks = document.querySelectorAll(".menu-link-item")

    sideBarLinks.forEach(a => a.addEventListener("click", (a) => {
        let b = event.target
        a.preventDefault();
    if (b.textContent === "Week") {
        setHeader("Week");
        let folder = sideBarFolders.getWeek();
        displaySwitchFolders(folder);
    } else if (b.textContent === "All") {
        setHeader("All");
        let folder = mainFolder;
        displaySwitchFolders(mainFolder);
    } else if (b.textContent === "Today") {
        setHeader("Today")
        let folder = sideBarFolders.getToday();
        displaySwitchFolders(folder);
    }
    }))
}


function setHeader(newHeader) {
    const header = document.querySelector(".main-title");
    header.textContent = newHeader
}