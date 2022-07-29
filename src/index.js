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

btnHome.textContent = 'HOME';
btnMenu.textContent = 'MENU';
btnContact.textContent = 'CONTACT';

btnHome.onclick = homeTab;
btnMenu.onclick = menuTab;
btnContact.onclick = contactTab;

bodyContainer.appendChild(btnHome);
bodyContainer.appendChild(btnMenu);
bodyContainer.appendChild(btnContact);

init();

function init(){
    const divContent = document.createElement('div');
    divContent.setAttribute('id','content');
    bodyContainer.appendChild(divContent);
    homeTab();
}