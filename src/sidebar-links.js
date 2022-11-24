import { sideBarFolders } from "./folders";
import { displaySwitchFolders } from "./displayFolders";

export function ok() {const sideBarLinks = document.querySelectorAll(".menu-link-item")
    console.log("test");
    sideBarLinks.forEach(a => a.addEventListener("click", (a) => {
        let b = event.target
    a.preventDefault();
    if (b.textContent === "Week") {
        let folder = sideBarFolders.getWeek();
        displaySwitchFolders(folder);
    }
    }))
}