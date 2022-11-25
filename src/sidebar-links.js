/* eslint-disable */
import { mainFolder, sideBarFolders } from './folders';
import { displaySwitchFolders } from './displayFolders';

export function ok() {
  const sideBarLinks = document.querySelectorAll('.menu-link-item');

  sideBarLinks.forEach((a) => a.addEventListener('click', (a) => {
    const b = event.target;
    a.preventDefault();
    if (b.textContent === 'Week') {
      setHeader('Week');
      const folder = sideBarFolders.getWeek();
      displaySwitchFolders(folder);
    } else if (b.textContent === 'All') {
      setHeader('All');
      const folder = mainFolder;
      displaySwitchFolders(mainFolder);
    } else if (b.textContent === 'Today') {
      setHeader('Today');
      const folder = sideBarFolders.getToday();
      displaySwitchFolders(folder);
    }
  }));
}

export function setHeader(newHeader) {
  const header = document.querySelector('.main-title');
  header.textContent = newHeader;
}
