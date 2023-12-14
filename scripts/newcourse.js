"use strict";
const addCourseBtn = document.getElementById("addCourseBtn");

window.onload = function () {
  addCourseBtn.onclick = addCourseBtnOnClick;
};

function addCourseBtnOnClick() {
  const inputDept = document.getElementById('inputDept').value;
  const inputCourseNumber = document.getElementById("inputCourseNumber").value;
  const inputCourseName = document.getElementById("inputCourseName").value;
  const inputInstructor = document.getElementById("inputInstructor").value;
  const inputStartDate = document.getElementById("inputStartDate").value;
  const inputNumberofDays = document.getElementById("inputNumberofDays").value;

  let bodyData = {
    dept: inputDept,
    courseNum: inputCourseNumber,
    courseName: inputCourseName,
    instructor: inputInstructor, // Assuming 'inputInstructor' was meant to be included
    startDate: inputStartDate,
    numDays: inputNumberofDays,
  };

  fetch("http://localhost:8081/api/courses", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
  .then(response => response.json())
  
  .then(json =>{
    console.log(json);
    // Handle the response data as needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Handle the error appropriately
  });
}

