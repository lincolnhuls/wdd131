//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

const letters = ["A", "B", "A"];
function makeGpa(letter){
    if (letter === "A") {
        points = 4;
    }
    else if (letter === "B") {
        points = 3;
    }
    return points
}
const gpaPoints = letters.map(makeGpa);
console.log(gpaPoints);

const sumGpa = gpaPoints.reduce(function (total, item) {
    return total + item;
});

const gpa = sumGpa / gpaPoints.length;
console.log(gpa);

const foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortNames = foods.filter(function (food) {
    if (food.length <= 5) {
        item = food;
    }
    else {
        item = null;
    }
    return item;
});
console.log(shortNames);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);
console.log(index);
