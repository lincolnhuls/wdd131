import recipes from './recipes.mjs';

function getRandomRecipe(list) {
    const random = Math.floor(Math.random() * recipes.length)
    return list[random];
} 

function tagsTemplate(tags) {
    let tagsHtml = '';
    tags.forEach(function(tag) {
        tagsHtml += `<li>${tag}</li>`;
    })
    return tagsHtml;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        // else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}


function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
		<ul class="recipe__tags">
			${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const output = document.querySelector('#recipeInfo');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHtml = recipeList.map(recipeTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.
    output.innerHTML = recipeHtml;
}

function init() {
    // get a random recipe
    const recipe = getRandomRecipe(recipes);
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

init();

function filter(query) {
	const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
        );
    })
	// sort by name
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(event) {
    event.preventDefault();
    // get the search input
    // convert the value in the input to lowercase
    const query = document.querySelector("#search").value.toLowerCase();
    // use the filter function to filter our recipes
    const filteredRecipes = filter(query);
    // render the filtered list
    renderRecipes(filteredRecipes);
}  

document.querySelector("#searchButton").addEventListener("click", searchHandler);

const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));