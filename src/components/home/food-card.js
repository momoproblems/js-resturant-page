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

function createCard(img) {

}