import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import foodGrid from './components/home/food-grid';
import headerElement from './components/header'

const mainElement = document.createElement('main');


function createHomePage() {
    const mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';

    mainElement.classList.add('wrapper');
    mainElement.appendChild(mainTitle);
    mainElement.appendChild(foodGrid);
}

function initializeSite() {
    createHomePage();
    document.body.appendChild(headerElement);
    document.body.appendChild(mainElement); 
}

initializeSite();
