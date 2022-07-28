import mealImg from './frango-quiabo.jpg';

export default function homeTab(){
        const container = document.getElementById('content');
        container.textContent = "";
        const element = document.createElement('div');
    
        const MyImage = new Image();
        MyImage.src = mealImg;
        element.appendChild(MyImage);
        container.appendChild(element);
    
        return;
}