import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import headerElement from './components/header'
import homePage from './components/home/food-grid';
import aboutPage from './components/about/about';

const main = document.createElement('main');
const home = document.getElementById('home');
const about = document.getElementById('about');

function createHomePage() {
    console.log('create home page function called');
    main.innerHTML = '';
    document.body.appendChild(headerElement);
    document.body.appendChild(homePage); 
}

function createAboutPage() {
    console.log('create about page function called');
    main.innerHTML = '';
    document.body.appendChild(headerElement);
    document.body.appendChild(aboutPage);
}

createHomePage();