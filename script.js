/* Basic arithmatic funcitons */

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/*  Takes an operater and 2 numbers, then returns the result of the 
    appropriate operation */
function operate(operater, a, b) {
  if (operater == "+") {
    return add(a, b);
  } else if (operater == "-") {
    return subtract(a, b);
  } else if (operater == "x") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
}

/* Adds number from the argument to the display div */
function addToDisplay(e) {
  console.log(e.target.textContent);
  console.log((displayDiv.textContent += e.target.textContent));
}

function clearDisplay() {
  displayDiv.textContent = "";
}

// Declare display number variable
let displayNumber = 0;
// Get display div
const displayDiv = document.querySelector(".display");
// Get all number buttons
const numberButtons = document.querySelectorAll(".number");

// Add event listeners to numbers to add to the display
numberButtons.forEach((number) =>
  number.addEventListener("click", addToDisplay)
);

// Add clear functionality to the clear button
document.querySelector(".btn-clear").addEventListener("click", clearDisplay);

console.log(operate("+", 4, 3));
console.log(operate("-", 4, 3));
console.log(operate("x", 4, 3));
console.log(operate("/", 4, 3));
