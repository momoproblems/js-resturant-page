import { cilantroCard, coffeeCard, cuminCard, eggCard, garlicCard, lambMeatCard, milkCard, oliveOilCard, onionCard, spinachCard, tomatoCard } from './food-card.js';

const foodGrid = document.createElement('div');
const mainTitle = document.createElement('div');



function createFoodGrid() {
    foodGrid.classList.add('food-grid');
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';
    return foodGrid;
}

createFoodGrid();  
foodGrid.appendChild(cilantroCard);
foodGrid.appendChild(coffeeCard);
foodGrid.appendChild(cuminCard);
foodGrid.appendChild(eggCard);
foodGrid.appendChild(garlicCard);
foodGrid.appendChild(lambMeatCard);
foodGrid.appendChild(milkCard);
foodGrid.appendChild(oliveOilCard);
foodGrid.appendChild(onionCard);
foodGrid.appendChild(spinachCard);
foodGrid.appendChild(tomatoCard);

export default foodGrid;