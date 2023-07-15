import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/footer.css'
import '../static/styles/home.css'
import '../static/styles/about.css'
import '../static/styles/cooked.css'
import {headerElement, footerElement} from './components/header'
import homePage from './components/home/food-grid';
import aboutPage from './components/about/about';
import cookedPage from './components/cooked/cooked';

function createHomePage() {
    document.body.appendChild(homePage); 
    document.body.appendChild(footerElement);
}

function createAboutPage() {
    document.body.appendChild(aboutPage);
    document.body.appendChild(footerElement);
}

function createCookedPage() {
    document.body.appendChild(cookedPage);
    document.body.appendChild(footerElement);
}

function initializeSite() {
    document.body.appendChild(headerElement);
    createHomePage();
    document.body.appendChild(footerElement);
}

function removePage() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        document.body.removeChild(mainElement);
    }
    if (footerElement) {
        document.body.removeChild(footerElement);
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