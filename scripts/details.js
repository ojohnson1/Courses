"use strict";

let table = document.getElementById("table");
let tbody=document.getElementById('tbody')

window.onload = function () {
  const urlParams = new URLSearchParams(location.search);
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");
    fetch(`http://localhost:8081/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        addDataToTable(data);
      });
  }
};

function addDataToTable(data) {
  let row = tbody.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);

  cell1.innerText = data.id;
  cell2.innerText = data.dept;
  cell3.innerText = data.courseNum;
  cell4.innerText = data.courseName;
  cell5.innerText = data.instructor;
  cell6.innerText = data.startDate;
  cell7.innerText = data.numDays;
}
