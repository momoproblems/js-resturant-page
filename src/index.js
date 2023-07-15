import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import '../static/styles/about.css'
import headerElement from './components/header'
import homePage from './components/home/food-grid';
import aboutPage from './components/about/about';


function createHomePage() {
    document.body.appendChild(homePage); 
}

function createAboutPage() {
    document.body.appendChild(aboutPage);
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
        createAboutPage();
    })

    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', () => {
        // window.location.href = '/index.html';
        removePage();
        createHomePage();
    })
});