import './style.css';
import mealImg from './frango-quiabo.jpg';

function includeImage(){
    const element = document.createElement('div');

    const MyImage = new Image();
    MyImage.src = mealImg;
    element.appendChild(MyImage);

    return element;
}

document.getElementById('content').appendChild(includeImage());

console.log("Simple log from index.js");