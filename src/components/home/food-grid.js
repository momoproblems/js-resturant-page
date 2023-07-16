import {
  cilantroCard,
  coffeeCard,
  cuminCard,
  eggCard,
  garlicCard,
  lambMeatCard,
  milkCard,
  oliveOilCard,
  onionCard,
  spinachCard,
  tomatoCard,
} from './food-card';

const homePage = document.createElement('main');
homePage.classList.add('wrapper');

const mainTitle = document.createElement('div');
mainTitle.setAttribute('id', 'mainTitle');
mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';

const foodGrid = document.createElement('div');
foodGrid.classList.add('food-grid');

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

homePage.appendChild(mainTitle);
homePage.appendChild(foodGrid);

export default homePage;
