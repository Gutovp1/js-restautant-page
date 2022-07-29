import mealImg1 from './frango-quiabo.jpg';
import mealImg2 from './tropeiro.jpg';
import mealImg3 from './pao-de-queijo.jpg';

export default function menuTab(){    
    const container = document.getElementById('content');
    container.textContent = "";
    
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'Regular mineiro menu';
    container.appendChild(menuTitle);
    

    const dish1 = document.createElement('div');
    const p1 = document.createElement('h4');
    p1.textContent = 'Juicy "Frango com Quiabo" (Chicken with Okra)';
    p1.setAttribute('a','#');
    dish1.appendChild(p1);
    const mealImage1 = new Image(150,105);
    mealImage1.src = mealImg1;
    dish1.appendChild(mealImage1);

    const dish2 = document.createElement('div');
    const p2 = document.createElement('h4');
    p2.textContent = 'Delicious Feijão Tropeiro (Tropeiro Beans)';
    dish2.appendChild(p2);
    const mealImage2 = new Image(150,105);
    mealImage2.src = mealImg2;
    dish2.appendChild(mealImage2);
    
    const dish3 = document.createElement('div');
    const p3 = document.createElement('h4');
    p3.textContent = 'Warm and soft Pão de Queijo (Cheese Bread)';
    dish3.appendChild(p3);
    const mealImage3 = new Image(150,105);
    mealImage3.src = mealImg3;
    dish3.appendChild(mealImage3);

    
    container.appendChild(dish1);
    container.appendChild(dish2);
    container.appendChild(dish3);
    
    return;
}