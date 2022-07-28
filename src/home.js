import mealImg from './frango-quiabo.jpg';

export default function homeTab(){
        const container = document.getElementById('content');
        container.textContent = "";
        
        const homeTitle = document.createElement('h1');
        homeTitle.textContent = "Get to know the mineira cuisine in Shiriu's restaurant.";    
    
        container.appendChild(homeTitle);

        return;
}