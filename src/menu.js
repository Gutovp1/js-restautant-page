import mealImg1 from './frango-quiabo.jpg';
import mealImg2 from './tropeiro.jpg';
import mealImg3 from './pao-de-queijo.jpg';

export default function menuTab(){    
    const container = document.getElementById('content');
    container.textContent = "";
    
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'Regular mineiro Menu';
    container.appendChild(menuTitle);

    const br = document.createElement('br');

    const mealImage1 = new Image(150,105);
    mealImage1.src = mealImg1;
    container.appendChild(mealImage1);
    container.appendChild(br);


    const mealImage2 = new Image(150,105);
    mealImage2.src = mealImg2;
    container.appendChild(mealImage2);
    container.appendChild(br);
    
    const mealImage3 = new Image(150,105);
    mealImage3.src = mealImg3;
    container.appendChild(mealImage3);
    
    return;
}