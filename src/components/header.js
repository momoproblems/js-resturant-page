function createHeader() {
    const headerElement = document.createElement('header');

    const logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'logo');
    logoDiv.innerText = "Mohamed & Sophia's Foods";

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const aElement1 = document.createElement('a');
    aElement1.href = '#';
    aElement1.innerText = 'Home'
    aElement1.setAttribute('id', 'home');   
    const aElement2 = document.createElement('a');
    aElement2.href = '#';
    aElement2.innerText = 'About'
    aElement2.setAttribute('id', 'about');
    const aElement3 = document.createElement('a');
    aElement3.href = '#';
    aElement3.innerText = 'Cooked'
    aElement3.setAttribute('id', 'cooked');
    const aElement4 = document.createElement('a');

    navbar.appendChild(aElement1);
    navbar.appendChild(aElement2);
    navbar.appendChild(aElement3);

    headerElement.appendChild(logoDiv);
    headerElement.appendChild(navbar)

    return headerElement;
}

const footerElement = document.createElement('footer');
const footerDiv = document.createElement('div');
footerDiv.setAttribute('id', 'footerText');
footerDiv.innerText = "Made by momoproblems :)";
footerElement.appendChild(footerDiv);

const headerElement = createHeader();

export { headerElement, footerElement };