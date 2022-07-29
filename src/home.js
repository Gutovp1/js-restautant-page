import homeImg from './restaurant.jpg';

export default function homeTab(){
        const container = document.getElementById('content');
        container.textContent = "";
        
        const homeTitle = document.createElement('h1');
        homeTitle.classList.add('title');
        homeTitle.textContent = "Try the mineira food in Shiriu's restaurant.";    
    
        const homeImage = new Image(400,300);
        homeImage.src = homeImg;

        container.appendChild(homeTitle);
        container.appendChild(homeImage);
        return;
}