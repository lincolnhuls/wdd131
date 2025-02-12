function getGrades(inputSelector){
    const stringGrades = document.querySelector(inputSelector);
    const grades = stringGrades.value.split(",");
    const gradesClean = grades.map((grade) => grade.trim().toUpperCase());
}