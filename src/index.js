import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import '../static/styles/about.css'
import '../static/styles/cooked.css'
import headerElement from './components/header'
import homePage from './components/home/food-grid';
import aboutPage from './components/about/about';
import cookedPage from './components/cooked/cooked';


function createHomePage() {
    document.body.appendChild(homePage); 
}

function createAboutPage() {
    document.body.appendChild(aboutPage);
}

function createCookedPage() {
    document.body.appendChild(cookedPage);
}

function initializeSite() {
    document.body.appendChild(headerElement);
    createHomePage();
}

function removePage() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        document.body.removeChild(mainElement);
    }
}

initializeSite();

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('#home');
    const aboutButton = document.querySelector('#about');
    const cookedButton = document.querySelector('#cooked');

    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        removePage();
        createHomePage();
    })

    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        removePage();
        createAboutPage();
    })

    cookedButton.addEventListener('click', (e) => {
        e.preventDefault();
        removePage();
        createCookedPage();
    })
});