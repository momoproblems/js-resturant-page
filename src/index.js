import './styles/style.css';
import foodGrid from './components/home/food-grid';

const mainElement = document.querySelector('main');

function createMainElement() {
    mainElement.classList.add('wrapper');
    mainElement.appendChild(foodGrid);
    return mainElement;
}

function createPage() {
    mainElement = createMainElement();
}

createPage();
