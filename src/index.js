import './styles/style.css';
import foodGrid from './components/home/food-grid';
import headerElement from './components/header'

const mainElement = document.querySelector('main');

function createHomePage() {
    mainElement.classList.add('wrapper');
    mainElement.appendChild(foodGrid);
}

function initializeSite() {
    document.body.insertBefore(headerElement, mainElement); 
    createHomePage();
}

initializeSite();
