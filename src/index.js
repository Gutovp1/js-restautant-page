import './style.css';
import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

const btnHome = document.createElement('button');
const btnMenu = document.createElement('button');
const btnContact = document.createElement('button');
const bodyContainer = document.body;

btnHome.classList.add('tab');
btnMenu.classList.add('tab');
btnContact.classList.add('tab');

btnHome.onclick = homeTab;
btnHome.textContent = 'HOME';
btnMenu.onclick = menuTab;
btnMenu.textContent = 'MENU';
btnContact.onclick = contactTab;
btnContact.textContent = 'CONTACT';

bodyContainer.appendChild(btnHome);
bodyContainer.appendChild(btnMenu);
bodyContainer.appendChild(btnContact);

// homeTab();