import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import foodGrid from './components/home/food-grid';
import headerElement from './components/header'

function createHomePage() {
    const mainElement = document.createElement('main');

    const mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';

    mainElement.classList.add('wrapper');
    mainElement.appendChild(mainTitle);
    mainElement.appendChild(foodGrid);

    document.body.appendChild(mainElement); 
}

function initializeSite() {
    document.body.appendChild(headerElement);
    createHomePage();
}

initializeSite();

document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.querySelector('#about');
    aboutButton.addEventListener('click', () => {
        // window.location.href = '/about.html';
        // mainElement.innerHTML = '';
        // I want to delete the main element
        const mainElement = document.querySelector('main'); 

        console.log('about button clicked');
        document.body.removeChild(mainElement);
    })

    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', () => {
        console.log('home button clicked');
        createHomePage();
    })
});