import { cilantroCard, coffeeCard, cuminCard, eggCard, garlicCard, lambMeatCard, milkCard, oliveOilCard, onionCard, spinachCard, tomatoCard } from './food-card.js';

const foodGrid = document.createElement('div');


function createFoodGrid() {
    foodGrid.classList.add('food-grid');
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