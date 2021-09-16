function start() {
  /*form = document.querySelector("form");*/
  lastName = document.getElementById("lastName");
  firstName = document.getElementById("firstName");
  age = document.getElementById("age");
  inputs.push(lastName, firstName, age);
  greeting = document.getElementById("greeting");
  ageAnalysis = document.getElementById("ageAnalysis");
  buttons.push(greeting, ageAnalysis);
  inputs.forEach(setInputValidation);
  buttons.forEach(setButtonsEvent);
}

function setInputValidation(input) {
  //Beállítja az üzeneteket, hogy a hover eseménynél, már azonnal legyen megjeleníthető tooltip, amennyiben ez szükséges (pl.: required).
  setValidationMessage(input);
  input.addEventListener("input", inputValidityCheck);
}

function inputValidityCheck(event) {
  const input = event.target;
  setValidationMessage(input);
}

function setValidationMessage(input) {
  const validityState = input.validity;
  const tooltip = input.parentElement.querySelector(".tooltipText>span");
  // Csak a szükséges elágazások lettek kifejve. A többi autómata, bármilyen nyelvű is legyen a böngésző.
  if (validityState.valueMissing) {
    if (input.type == "text") {
      input.setCustomValidity("Töltse ki ezt a mezőt!");
    }
    if (input.type == "number") {
      input.setCustomValidity("Írjon be egy számot!");
    }
  } else if (validityState.badInput) {
    input.setCustomValidity("Írjon be egy számot!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("Válasszon, egy ennél nem kisebb értéket: " + input.min + "!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Válasszon, egy ennél nem nagyobb értéket: " + input.max + "!");
  } else if (validityState.stepMismatch) {
    //a lépés köz a min-hez képest számolódik, ha nincs min érték, akkor 0-hoz képest.
    //Ha nincs lépés köz megadva, akkor alapértelmezetten 1 az értéke (csak js-ben nem - 0).
    let value = Number(input.value);
    let min = Number(input.min);
    let step = Number(input.step);
    if (step == 0) {
      step = 1;
    }
    let stepQ = (value - min) / step;
    input.setCustomValidity("Válasszon egy nem-negatív egész számot! A két legközelebbi érvényes érték: " + (min + Math.floor(stepQ) * step) + " és " + (min + Math.ceil(stepQ) * step) + ".");
  } else if (validityState.patternMismatch) {
    if (input === lastName) {
      input.setCustomValidity("Csak a magyar \"ABC\" betűit a (') (-) karaktereket és a szóközt használhatja, egyéb különleges karaktereket nem.");
    }
    if (input === firstName) {
      input.setCustomValidity("Csak a magyar \"ABC\" betűi a (-) karakter és a szóköz használható.");
    }
  } else {
    input.setCustomValidity("");
  }
  if (input.validationMessage != "") {
    tooltip.textContent = input.validationMessage;
  }
}

function setButtonsEvent(button) {
  button.addEventListener("click", formValidityCheck);
}

function formValidityCheck(event) {
  if (event.target.form.checkValidity()) {
    console.log("Sikeres érvényesítés");
  } else {
    let firstInvalidElement = document.querySelector("input:invalid");
    //scrollos cucc, majd később. :D
    firstInvalidElement.focus();
  }
}

var /*form,*/ lastName, firstName, age, greeting, ageAnalysis;
const inputs = [];
const buttons = [];
window.addEventListener("load", start);

