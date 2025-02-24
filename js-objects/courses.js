const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            addSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            addSections(this.sections);
        }
    },
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro. T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis. A"
        }
    ]
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function template(section) {
    return`<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
}

function addSections(sections) {
    const html = sections.map(template);
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
addSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
})