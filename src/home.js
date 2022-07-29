import homeImg from './restaurant.jpg';

export default function homeTab(){
        const container = document.getElementById('content');
        container.textContent = "";
        
        const homeTitle = document.createElement('h1');
        homeTitle.classList.add('title');
        homeTitle.textContent = "Shiriu's mineiro restaurant.";    
    
        const homeCopy = document.createElement('h3');
        homeCopy.textContent = "Mineira cuisine is well known as the best food in Brazil. Here in Shiriu, you will find the most mineiro typical dishes. Give it a try!";

        const homeImage = new Image(400,300);
        homeImage.src = homeImg;

        container.appendChild(homeTitle);
        container.appendChild(homeCopy);
        container.appendChild(homeImage);
        return;
}