import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import homePage from './components/home/food-grid';
import headerElement from './components/header'

function createHomePage() {
    document.body.appendChild(homePage); 
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
    const aboutButton = document.querySelector('#about');
    aboutButton.addEventListener('click', () => {
        // window.location.href = '/about.html';
        removePage();
    })

    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', () => {
        // window.location.href = '/index.html';
        removePage();
        createHomePage();
    })
});