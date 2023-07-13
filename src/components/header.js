const headerElement = document.createElement('header');

function createHeader() {
    const logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'logo');
    logoDiv.innerText = "Mohamed & Sophia's Foods";

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const aElement1 = document.createElement('a');
    aElement1.href = '#';
    aElement1.innerText = 'Home'
    const aElement2 = document.createElement('a');
    aElement2.href = '#';
    aElement2.innerText = 'About'
    const aElement3 = document.createElement('a');
    aElement3.href = '#';
    aElement3.innerText = 'Cooked'
    const aElement4 = document.createElement('a');
    aElement4.href = '#';
    aElement4.innerText = 'Uncooked'

    navbar.appendChild(aElement1);
    navbar.appendChild(aElement2);
    navbar.appendChild(aElement3);
    navbar.appendChild(aElement4);

    headerElement.appendChild(logoDiv);
    headerElement.appendChild(navbar)

    return headerElement;
}

export default createHeader();