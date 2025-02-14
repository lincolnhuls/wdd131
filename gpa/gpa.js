function getGrades(inputSelector){
    const stringGrades = document.querySelector(inputSelector);
    const grades = stringGrades.value.split(",");
    const gradesClean = grades.map((grade) => grade.trim().toUpperCase());
    return gradesClean;
}

function lookUpGrade(grade){
    let value = 0;
    if (grade.toUpperCase() === "A"){
        value = 4;
    }
    else if (grade.toUpperCase() === "B"){
        value = 3;
    }
    else if (grade.toUpperCase() === "C"){
        value = 2;
    }
    else if (grade.toUpperCase() === "D"){
        value = 1;
    }
    else{
        value = 0;
    }
    return value;
}

function calculateGpa(grades){
    const gradePoints = grades.map((grade) => lookUpGrade(grade))
    const gpa = gradePoints.reduce((total, value) => total + value) / gradePoints.length;
    return gpa.toFixed(2);
}

function displayGpa(gpa, selector){
    const output = document.querySelector(selector);
    output.innerHTML = gpa;
}

function click(){
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    displayGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", click);