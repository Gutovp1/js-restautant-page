import mealImg from './frango-quiabo.jpg';

export default function menuTab(){    
    const container = document.getElementById('content');
    container.textContent = "";
    const title =   document.createElement('h1');
    title.textContent = 'Regular mineiro Menu';
    container.appendChild(title);
    return title;
}