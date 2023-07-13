import aboutUsImage from '../../../static/images/about/about-us.jpeg'
import harryPotterImage from '../../../static/images/about/harry-potter.jpg'
import eatingImage from '../../../static/images/about/eating.jpeg'
import flowersImage from '../../../static/images/about/flowers.jpeg'
import bugsImage from '../../../static/images/about/bugs.jpeg'
import beingWeirdImage from '../../../static/images/about/being-weird.jpeg'
import motorcycleImage from '../../../static/images/about/motorcycle.jpeg'
import catsImage from '../../../static/images/about/cats.jpeg'
import beachImage from '../../../static/images/about/beach.jpeg'
import winningImage from '../../../static/images/about/Winning.jpeg'
import birthdayImage from '../../../static/images/about/birthday.jpeg'
import chessImage from '../../../static/images/about/chess.jpeg'
import philosophyImage from '../../../static/images/about/philosophy.png'

const images = {
    aboutUsImage,
    harryPotterImage,
    eatingImage,
    flowersImage,
    bugsImage,
    beingWeirdImage,
    motorcycleImage,
    catsImage,
    beachImage,
    winningImage,
    birthdayImage,
    chessImage,
    philosophyImage
}

const titles = {
    aboutUs: 'A little bit about us',
    harryPotter: 'Harry Potter',
    eating: 'Eating',
    flowers: 'Flowers',
    bugs: 'Bugs',
    beingWeird: 'Being Weird',
    motorcycle: 'Motorcycles',
    cats: 'Cats',
    beach: 'Beach',
    winning: 'Winning',
    birthday: 'Birthdays',
    chess: 'Chess',
    philosophy: 'Philosophy'
}

const aboutPage = document.createElement('main');
aboutPage.classList.add('wrapper-about');

function createBio() {
    const bioDiv = document.createElement('div');
    bioDiv.classList.add('bio');

    const bioTitle = document.createElement('div');
    bioTitle.classList.add('name');
    bioTitle.innerText = 'A little bit about us';

    const bioInfo = document.createElement('div');
    bioInfo.classList.add('info');
    bioInfo.innerText = "Sophia and I are senior students at UC Merced. We have many things in common, that are very dear to us. We enjoy many things about life. It's a joy to explore all that there is and learn about all that we can!";

    const bioImage = document.createElement('div');
    const imgElement = document.createElement('img');
    imgElement.src = images.aboutUsImage;
    bioImage.appendChild(imgElement);

    bioDiv.appendChild(bioTitle);
    bioDiv.appendChild(bioInfo);

    return {bioDiv, bioImage};
}

function createInterests(title, image) {
    const interestsDiv = document.createElement('div');
    interestsDiv.classList.add('interests');

    const interestsTitle = document.createElement('div');
    interestsTitle.classList.add('name');
    interestsTitle.innerText = title;

    const interestsImage = document.createElement('img');
    interestsImage.src = image;

    interestsDiv.appendChild(interestsTitle);
    interestsDiv.appendChild(interestsImage);

    return interestsDiv;
}


const {bioDiv, bioImage} = createBio();
const harryPotterDiv = createInterests(titles.harryPotter, images.harryPotterImage);
const eatingDiv = createInterests(titles.eating, images.eatingImage);
const flowersDiv = createInterests(titles.flowers, images.flowersImage);
const bugsDiv = createInterests(titles.bugs, images.bugsImage);
const beingWeirdDiv = createInterests(titles.beingWeird, images.beingWeirdImage);
const motorcycleDiv = createInterests(titles.motorcycle, images.motorcycleImage);
const catsDiv = createInterests(titles.cats, images.catsImage);
const beachDiv = createInterests(titles.beach, images.beachImage);
const winningDiv = createInterests(titles.winning, images.winningImage);
const birthdayDiv = createInterests(titles.birthday, images.birthdayImage);
const chessDiv = createInterests(titles.chess, images.chessImage);
const philosophyDiv = createInterests(titles.philosophy, images.philosophyImage);

aboutPage.appendChild(bioDiv);
aboutPage.appendChild(bioImage);
aboutPage.appendChild(harryPotterDiv);
aboutPage.appendChild(eatingDiv);
aboutPage.appendChild(flowersDiv);
aboutPage.appendChild(bugsDiv);
aboutPage.appendChild(beingWeirdDiv);
aboutPage.appendChild(motorcycleDiv);
aboutPage.appendChild(catsDiv);
aboutPage.appendChild(beachDiv);
aboutPage.appendChild(winningDiv);
aboutPage.appendChild(birthdayDiv);
aboutPage.appendChild(chessDiv);
aboutPage.appendChild(philosophyDiv);

export default aboutPage;
