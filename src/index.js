import './style.css';
import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

const btnHome = document.createElement('button');
const btnMenu = document.createElement('button');
const btnContact = document.createElement('button');
const divContent = document.getElementById('content');

btnHome.onclick = homeTab;
btnHome.textContent = 'HOME';
btnMenu.onclick = menuTab;
btnMenu.textContent = 'MENU';
btnContact.onclick = contactTab;
btnContact.textContent = 'CONTACT';

divContent.appendChild(btnHome);
divContent.appendChild(btnMenu);
divContent.appendChild(btnContact);

console.log("Simple log from index.js");
