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

function filter(query) {
	const filtered = objects.filter(object => {
        return (
            object.name.toLowerCase().includes(query) ||
            object.description.toLowerCase().includes(query) ||
            object.image.toLowerCase().includes(query)
        );
    })
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.querySelector("#search").value.toLowerCase();
    const filteredObjects = filter(query);
    renderObjects(filteredObjects);
}  

function init() {
    if (document.querySelector('.objectInfo')) {
        renderObjects(objects);
    }  
    if (document.querySelector('#searchForm')) {
        document.querySelector("#searchForm").addEventListener("submit", searchHandler);
    }
}

const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {logo.src = 'images/3dprintslogoalt.png';});

logo.addEventListener('mouseout', () => {logo.src = 'images/3dprintslogo.png';});

document.addEventListener('DOMContentLoaded', init);