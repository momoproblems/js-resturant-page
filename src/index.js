import './styles/style.css';

import cilantro from './assets/home/cilantro.jpg';
import coffee from './assets/home/coffee.jpg';
import cumin from './assets/home/cumin.jpg'
import egg from './assets/home/egg.jpg';
import garlic from './assets/home/garlic.jpg';
import lambMeat from './assets/home/lamb-meat.jpg';
import milk from './assets/home/milk.jpg';
import oliveOil from './assets/home/olive-oil.jpg';
import onion from './assets/home/onion.jpg';
import spinach from './assets/home/spinach.jpg';
import tomato from './assets/home/tomatoes.jpg';

const mainElement = document.querySelector('main');
const mainTitle = document.createElement('div');
const foodGrid = document.createElement('div');

function createMainElement() {
    mainElement.classList.add('wrapper');
    return mainElement;
}

function createMainTitle() {
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';
    return mainTitle;
}

function createFoodGrid() {
    foodGrid.classList.add('food-grid');
    return foodGrid;
}

function createPage() {
    mainElement = createMainElement();
    mainElement.appendChild(createMainTitle());
    mainElement.appendChild(createFoodGrid());
}

createPage();
