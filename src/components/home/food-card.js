import cilantroImage from './assets/home/cilantro.jpg';
import coffeeImage from './assets/home/coffee.jpg';
import cuminImage from './assets/home/cumin.jpg'
import eggImage from './assets/home/egg.jpg';
import garlicImage from './assets/home/garlic.jpg';
import lambMeatImage from './assets/home/lamb-meat.jpg';
import milkImage from './assets/home/milk.jpg';
import oliveOilImage from './assets/home/olive-oil.jpg';
import onionImage from './assets/home/onion.jpg';
import spinachImage from './assets/home/spinach.jpg';
import tomatoImage from './assets/home/tomatoes.jpg';

import foodGrid from './food-grid'

const foodCard = document.createElement('div');

const images = {
    cilantroImage,
    coffeeImage,
    cuminImage,
    eggImage,
    garlicImage,
    lambMeatImage,
    milkImage,
    oliveOilImage,
    onionImage,
    spinachImage,
    tomatoImage
}

const titles = {
    cilantroTitle: "Cilantro",
    coffeeTitle: "Coffee",
    cuminTitle: "Cumin",
    eggTitle: "Egg",
    garlicTitle: "Garlic",
    lambMeatTitle: "Lamb Meat",
    milkTitle: "Milk",
    oliveOilTitle: "Olive Oil",
    onionTitle: "Onion",
    spinachTitle: "Spinach",
    tomatoTitle: "Tomato"
};

const descriptions = {
    cilantroDescription: "The zesty green daredevil, lending a fresh and vibrant twist to dishes, delighting taste buds and dividing opinions with its unique flavor.",
    coffeeDescription: "The aromatic elixir of the gods, awakening senses and bestowing caffeinated bliss upon mortals, the nectar of productivity.",
    cuminDescription: "The spice whisperer, sprinkling its warm, earthy essence into dishes, transporting taste buds to far-off lands.",
    eggDescription: "The culinary chameleons, transforming from delicate omelettes to hearty scrambles, the ultimate breakfast heroes.",
    garlicDescription: "Nature's aromatic ninja, adding flavor and warding off vampires with its pungent prowess.",
    lambMeatDescription: "The regal meat, gracing tables with its tender succulence and commanding presence, fit for kings and queens.",
    milkDescription: "Nature's white elixir, nurturing bones and fueling dreams with its creamy goodness, a staple in kitchens and bedtime stories.",
    oliveOilDescription: "Liquid gold from Mediterranean shores, drizzling its smooth richness, elevating dishes to gourmet status.",
    onionDescription: "The multitasking tearjerker, effortlessly enhancing dishes while making you weep in appreciation.",
    spinachDescription: "Popeye's secret weapon, these leafy green powerhouses pack a punch of nutrients, transforming ordinary meals into superfood feats.",
    tomatoDescription: "Juicy orbs of summer delight, bursting with tangy sweetness, lending their vibrant hue to salads and sauces alike."
};

const urls = {
    cilantroURL: "https://en.wikipedia.org/wiki/Coriander",
    coffeeURL: "https://en.wikipedia.org/wiki/Coffee",
    cuminURL: "https://en.wikipedia.org/wiki/Cumin",
    eggURL: "https://en.wikipedia.org/wiki/Egg_as_food",
    garlicURL: "https://en.wikipedia.org/wiki/Garlic",
    lambMeatURL: "https://en.wikipedia.org/wiki/Lamb_and_mutton",
    milkURL: "https://en.wikipedia.org/wiki/Milk",
    oliveOilURL: "https://en.wikipedia.org/wiki/Olive_oil",
    onionURL: "https://en.wikipedia.org/wiki/Onion",
    spinachURL: "https://en.wikipedia.org/wiki/Spinach",
    tomatoURL: "https://en.wikipedia.org/wiki/Tomato"
}

function createCard(image, title, description, urls) {
    foodCard.classList.add('food-card');
    
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('food-image')
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageDiv.appendChild(imageElement);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('food-info');
    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    const descElement = document.createElement('h2');
    descElement.textContent = description
    infoDiv.appendChild(titleElement);
    infoDiv.appendChild(descElement);

    const 

    return foodCard;
}