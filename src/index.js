import './styles/style.css';

const mainElement = document.querySelector('main');
const mainTitle = document.createElement('div');


function createMainElement() {
    mainElement.classList.add('wrapper');
    return mainElement;
}

function createMainTitle() {
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.innerText = 'Here are some of our favorite ingredients that we cook with everyday :)';
    return mainTitle;
}

function createPage() {
    mainElement = createMainElement();
    mainElement.appendChild(createMainTitle());
    mainElement.appendChild(createFoodGrid());
}

createPage();
