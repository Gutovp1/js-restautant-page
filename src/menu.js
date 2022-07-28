import mealImg1 from './frango-quiabo.jpg';

export default function menuTab(){    
    const container = document.getElementById('content');
    container.textContent = "";
    const title =   document.createElement('h1');
    title.textContent = 'Regular mineiro Menu';

    const element = document.createElement('div');
    const MyImage = new Image();
    MyImage.src = mealImg1;
    element.appendChild(MyImage);
    
    container.appendChild(title);
    container.appendChild(element);
    return;
}