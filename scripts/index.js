"use strict";

window.onload = function () {
  initCourseTable();


};

function initCourseTable() {
  let table = document.getElementById("displayTable");
  //   let tablebody = document.createElement("tbody");

  //   table.appendChild(tablebody);
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((data) => {
      for (let course of data) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = course.dept;
        cell3.innerHTML = course.courseName;
        cell2.innerHTML = course.courseNum;

        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
        anchor.text = "See details";
        cell4.appendChild(anchor);
      }
    });
}

