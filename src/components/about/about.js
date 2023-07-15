import aboutUs from '../../../static/images/about/about-us.jpeg'
import beach from '../../../static/images/about/beach.jpeg'
import beingWeird from '../../../static/images/about/being-weird.jpeg'
import birthday from '../../../static/images/about/birthday.jpeg'
import bugs from '../../../static/images/about/bugs.jpeg'
import catTrip from '../../../static/images/about/cat-trip.jpeg'
import cats from '../../../static/images/about/cats.jpeg'
import chess from '../../../static/images/about/chess.jpeg'
import concert from '../../../static/images/about/concert.jpeg'
import eating from '../../../static/images/about/eating.jpeg'
import flowers from '../../../static/images/about/flowers.jpeg'
import motorcycle from '../../../static/images/about/motorcycle.jpeg'
import philosophy from '../../../static/images/about/philosophy.png'
import winning from '../../../static/images/about/winning.jpeg'

const images = {
    aboutUs,
    beach,
    beingWeird,
    birthday,
    bugs,
    catTrip,
    cats,
    chess,
    concert,
    eating,
    flowers,
    motorcycle,
    philosophy,
    winning,
};

const imageAlt = {
    aboutUs: 'Mohamed and Sophia',
    beach: 'Mohamed and Sophia at the beach',
    beingWeird: 'Sophia and Mohamed being weird',
    birthday: 'Sophia nirthday',
    bugs: 'Sophia and bugs',
    catTrip: 'Mohamed on a trip with their cat',
    cats: 'Sophia with cat',
    chess: 'Sophia and Mohamed playing chess',
    concert: 'Sophia and Mohamed at a concert',
    eating: 'Sophia and Mohamed eating',
    flowers: 'Sophia with flowers',
    motorcycle: 'Mohamed on a motorcycle',
    philosophy: 'Sophia and Mohamed with philosophy',
    winning: 'Mohamed winning',
};

function createAboutUs() {
    const divContainer = document.createElement('div');
    divContainer.classList.add('about-us-container');

    const divBio = document.createElement('div');
    divBio.classList.add('about-us-bio');
    divBio.textContent = 'Sophia and I are both senior students at UC Merced. She studies Philosophy while I study Computer Science. We share many loves and interests. We live according to philosophies that are dear to us. And on top of all that we love to cook!!';

    const divImage = document.createElement('div');
    divImage.classList.add('about-us-image');
    const imageElement = document.createElement('img');
    imageElement.src = images.aboutUs;
    imageElement.alt = imageAlt.aboutUs;
    divImage.appendChild(imageElement);

    divContainer.appendChild(divBio);
    divContainer.appendChild(divImage);

    return divContainer;
}

function createInterest(image, alt) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('interests-image');

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = alt;

    divContainer.appendChild(imageElement);

    return divContainer;
}

const beachImage = createInterest(images.beach, imageAlt.beach);
const beingWeirdImage = createInterest(images.beingWeird, imageAlt.beingWeird);
const birthdayImage = createInterest(images.birthday, imageAlt.birthday);
const bugsImage = createInterest(images.bugs, imageAlt.bugs);
const catTripImage = createInterest(images.catTrip, imageAlt.catTrip);
const catsImage = createInterest(images.cats, imageAlt.cats);
const chessImage = createInterest(images.chess, imageAlt.chess);
const concertImage = createInterest(images.concert, imageAlt.concert);
const eatingImage = createInterest(images.eating, imageAlt.eating);
// eating.imageElement.style.objectPosition = 'top';
const flowersImage = createInterest(images.flowers, imageAlt.flowers);
// flowers.imageElement.style.objectPosition = 'top';
const motorcycleImage = createInterest(images.motorcycle, imageAlt.motorcycle);
const philosophyImage = createInterest(images.philosophy, imageAlt.philosophy);
const winningImage = createInterest(images.winning, imageAlt.winning);

const aboutUsElement = createAboutUs();
const interestTitle = document.createElement('div');
interestTitle.classList.add('interests-title');
interestTitle.textContent = 'These are some of our favorite hobbies & some cool photos :)';

const interestsContainer = document.createElement('div');
interestsContainer.classList.add('interests-container');

const aboutPage = document.createElement('main');
aboutPage.appendChild(aboutUsElement);
aboutPage.appendChild(interestTitle);
interestsContainer.appendChild(beachImage);
interestsContainer.appendChild(beingWeirdImage);
interestsContainer.appendChild(birthdayImage);
interestsContainer.appendChild(bugsImage);
interestsContainer.appendChild(catTripImage);
interestsContainer.appendChild(catsImage);
interestsContainer.appendChild(chessImage);
interestsContainer.appendChild(concertImage);
interestsContainer.appendChild(eatingImage);
interestsContainer.appendChild(flowersImage);
interestsContainer.appendChild(motorcycleImage);
interestsContainer.appendChild(philosophyImage);
interestsContainer.appendChild(winningImage);
aboutPage.appendChild(interestsContainer);

export default aboutPage;
