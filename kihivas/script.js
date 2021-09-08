function start() {
  form = document.querySelector("form");
  lastName = document.getElementById("lastName");
  firstName = document.getElementById("firstName");
  age = document.getElementById("age");
  inputs.push(lastName, firstName, age);
  greeting = document.getElementById("greeting");
  ageAnalysis = document.getElementById("ageAnalysis");
  buttons.push(greeting, ageAnalysis);
  inputs.forEach(inputValidation);
}

function inputValidation(input) {
  input.addEventListener("input", validityCheck);
}

function validityCheck(event) {
  console.log(event.target.value);
  console.log(event.target.validity.valid);
  console.log(event.target.checkValidity());
  if (form.checkValidity()) {
    console.log(age.value);
  }
}

var form, lastName, firstName, age, greeting, ageAnalysis;
const inputs = [];
const buttons = [];
window.addEventListener("load", start);

// function myFunction() {
//   // Get the value of the input field with id="numb"
//   let x = document.getElementById("numb").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementById("demo").innerHTML = text;
// }