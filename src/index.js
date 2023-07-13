import '../public/styles/reset.css'
import '../public/styles/utils.css'
import '../public/styles/header.css'
import '../public/styles/home.css'
import foodGrid from './components/home/food-grid';
import headerElement from './components/header'

const mainElement = document.createElement('main');

function createHomePage() {
    mainElement.classList.add('wrapper');
    mainElement.appendChild(foodGrid);
}

function initializeSite() {
    createHomePage();
    document.body.appendChild(headerElement);
    document.body.appendChild(mainElement); 
}

initializeSite();
