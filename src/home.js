import mealImg from './frango-quiabo.jpg';

export default function homeTab(){
        const element = document.createElement('div');
    
        const MyImage = new Image();
        MyImage.src = mealImg;
        element.appendChild(MyImage);
        document.getElementById('content').appendChild(element);
    
        console.log('You are in home');
        return element;
}