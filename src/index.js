import '../static/styles/reset.css'
import '../static/styles/utils.css'
import '../static/styles/header.css'
import '../static/styles/home.css'
import homePage from './components/home/food-grid';
import headerElement from './components/header'


function createHomePage() {
    document.body.appendChild(headerElement);
    document.body.appendChild(homePage); 
}

createHomePage();