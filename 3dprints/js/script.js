import objects from './objects.mjs'

function objectTemplate(object) {
    return `<figure class="object">
    <img src="${object.image}" alt="image of ${object.name}" />
    <figcaption>
        <h2>${object.name}</h2>
        <p class="object__description">
            ${object.description}
        </p>
        <p>QT: ${object.quantity}</p>
    </figcaption>
    </figure>`;
}

function renderObjects(objectList) {
    const output = document.querySelector('.objectInfo'); 
    const objectHtml = objectList.map(objectTemplate).join('');
    output.innerHTML = objectHtml;
}

function init() {
    renderObjects(objects);
}

init();

const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {logo.src = 'images/3dprintslogoalt.png';});

logo.addEventListener('mouseout', () => {logo.src = 'images/3dprintslogo.png';});