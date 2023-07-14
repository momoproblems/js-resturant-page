import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import '../static/styles/about.css'
import headerElement from './components/header'
import homePage from './components/home/food-grid';
import aboutPage from './components/about/about';

document.addEventListener('DOMContentLoaded', function() {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
  
    home.addEventListener('click', createHomePage);
    about.addEventListener('click', createAboutPage);
});

const main = document.createElement('main');

function createHomePage() {
    console.log('create home page function called');
    document.body.appendChild(homePage); 
}

function createAboutPage() {
    console.log('create about page function called');
    document.body.appendChild(aboutPage);
}

function initializeWebsite() {
    document.body.appendChild(headerElement);
    createAboutPage();
}

initializeWebsite();