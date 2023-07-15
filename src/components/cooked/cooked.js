import breakfast1 from '../../../static/images/cooked/breakfast1.jpeg'
import breakfast2 from '../../../static/images/cooked/breakfast2.jpeg'
import breakfast3 from '../../../static/images/cooked/breakfast3.jpeg'
import breakfast4 from '../../../static/images/cooked/breakfast4.jpeg'
import breakfast5 from '../../../static/images/cooked/breakfast5.jpeg'
import chicken1 from '../../../static/images/cooked/chicken1.jpeg'
import chicken2 from '../../../static/images/cooked/chicken2.jpeg'
import dinner1 from '../../../static/images/cooked/dinner1.jpeg'
import dinner2 from '../../../static/images/cooked/dinner2.jpeg'
import dinner3 from '../../../static/images/cooked/dinner3.jpeg'
import dinner4 from '../../../static/images/cooked/dinner4.jpeg'
import dinner5 from '../../../static/images/cooked/dinner5.jpeg'
import familyMeal1 from '../../../static/images/cooked/family-meal-1.jpg'
import familyMeal2 from '../../../static/images/cooked/family-meal-2.jpeg'
import familyMeal3 from '../../../static/images/cooked/family-meal-3.jpeg'
import lunch1 from '../../../static/images/cooked/lunch1.jpeg'
import lunch2 from '../../../static/images/cooked/lunch2.jpeg'
import lunch3 from '../../../static/images/cooked/lunch3.jpeg'
import lunch4 from '../../../static/images/cooked/lunch4.jpeg'
import sandwich1 from '../../../static/images/cooked/sandwich1.jpeg'
import steakRice from '../../../static/images/cooked/steak-rice.jpeg'
import steak1 from '../../../static/images/cooked/steak1.jpeg'

const images = {
    breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
    breakfast5,
    chicken1,
    chicken2,
    dinner1,
    dinner2,
    dinner3,
    dinner4,
    dinner5,
    familyMeal1,
    familyMeal2,
    familyMeal3,
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    sandwich1,
    steakRice,
    steak1,
};

const imageAlt = {
    breakfast1: 'Breakfast',
    breakfast2: 'Breakfast',
    breakfast3: 'Breakfast',
    breakfast4: 'Breakfast',
    breakfast5: 'Breakfast',
    chicken1: 'Chicken',
    chicken2: 'Chicken',
    dinner1: 'Dinner',
    dinner2: 'Dinner',
    dinner3: 'Dinner',
    dinner4: 'Dinner',
    dinner5: 'Dinner',
    familyMeal1: 'Family Meal',
    familyMeal2: 'Family Meal',
    familyMeal3: 'Family Meal',
    lunch1: 'Lunch',
    lunch2: 'Lunch',
    lunch3: 'Lunch',
    lunch4: 'Lunch',
    sandwich1: 'Sandwich',
    steakRice: 'Steak and Rice',
    steak1: 'Steak',
};

function createCooked(image, alt) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('cooked-image');

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = alt;

    divContainer.appendChild(imageElement);

    return divContainer;
}

const cookedTitle = document.createElement('div');
cookedTitle.classList.add('cooked-title');
cookedTitle.textContent = 'Here are some of the foods we made!';

const cookedContainer = document.createElement('div');
cookedContainer.classList.add('interests-container');

const breakfast1Image = createCooked(images.breakfast1, imageAlt.breakfast1);
const breakfast2Image = createCooked(images.breakfast2, imageAlt.breakfast2);
const breakfast3Image = createCooked(images.breakfast3, imageAlt.breakfast3);
const breakfast4Image = createCooked(images.breakfast4, imageAlt.breakfast4);
const breakfast5Image = createCooked(images.breakfast5, imageAlt.breakfast5);
const chicken1Image = createCooked(images.chicken1, imageAlt.chicken1);
const chicken2Image = createCooked(images.chicken2, imageAlt.chicken2);
const dinner1Image = createCooked(images.dinner1, imageAlt.dinner1);
const dinner2Image = createCooked(images.dinner2, imageAlt.dinner2);
const dinner3Image = createCooked(images.dinner3, imageAlt.dinner3);
const dinner4Image = createCooked(images.dinner4, imageAlt.dinner4);
const dinner5Image = createCooked(images.dinner5, imageAlt.dinner5);
const familyMeal1Image = createCooked(images.familyMeal1, imageAlt.familyMeal1);
const familyMeal2Image = createCooked(images.familyMeal2, imageAlt.familyMeal2);
const familyMeal3Image = createCooked(images.familyMeal3, imageAlt.familyMeal3);
const lunch1Image = createCooked(images.lunch1, imageAlt.lunch1);
const lunch2Image = createCooked(images.lunch2, imageAlt.lunch2);
const lunch3Image = createCooked(images.lunch3, imageAlt.lunch3);
const lunch4Image = createCooked(images.lunch4, imageAlt.lunch4);
const sandwich1Image = createCooked(images.sandwich1, imageAlt.sandwich1);
const steakRiceImage = createCooked(images.steakRice, imageAlt.steakRice);
const steak1Image = createCooked(images.steak1, imageAlt.steak1);

cookedContainer.appendChild(breakfast1Image);
cookedContainer.appendChild(breakfast2Image);
cookedContainer.appendChild(breakfast3Image);
cookedContainer.appendChild(breakfast4Image);
cookedContainer.appendChild(breakfast5Image);
cookedContainer.appendChild(chicken1Image);
cookedContainer.appendChild(chicken2Image);
cookedContainer.appendChild(dinner1Image);
cookedContainer.appendChild(dinner2Image);
cookedContainer.appendChild(dinner3Image);
cookedContainer.appendChild(dinner4Image);
cookedContainer.appendChild(dinner5Image);
cookedContainer.appendChild(familyMeal1Image);
cookedContainer.appendChild(familyMeal2Image);
cookedContainer.appendChild(familyMeal3Image);
cookedContainer.appendChild(lunch1Image);
cookedContainer.appendChild(lunch2Image);
cookedContainer.appendChild(lunch3Image);
cookedContainer.appendChild(lunch4Image);
cookedContainer.appendChild(sandwich1Image);
cookedContainer.appendChild(steakRiceImage);
cookedContainer.appendChild(steak1Image);

const cookedPage = document.createElement('main');
cookedPage.appendChild(cookedTitle);
cookedPage.appendChild(cookedContainer);

export default cookedPage;