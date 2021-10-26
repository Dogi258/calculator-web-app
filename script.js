/* Get important elements */
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandElement = document.querySelector("[data-current-operand]");
let operation = undefined;

function clear() {
  previousOperandElement.textContent = "";
  currentOperandElement.textContent = "";
  operation = undefined;
}

function deleteLastNumber() {
  currentOperandElement.textContent = currentOperandElement.textContent.slice(
    0,
    -1
  );
}

function appendNumber(number) {
  // If a decimal was selected, check to if operand already has one
  if (number === "." && currentOperandElement.textContent.includes(".")) return;
  currentOperandElement.textContent += number;
}

function chooseOperation(op) {
  // If current operand is empty, do not execute
  if (currentOperandElement.textContent === "") return;
  // If we have something in the previous operand, compute
  if (previousOperandElement.textContent != "") {
    compute();
  }
  operation = op;
  previousOperandElement.textContent = currentOperandElement.textContent;
  currentOperandElement.textContent = "";
}

function compute() {
  const prev = parseFloat(previousOperandElement.textContent);
  const current = parseFloat(currentOperandElement.textContent);
  // Check to see if we have both operands, otherwise, return
  if (isNaN(prev) || isNaN(current)) return;
  let computation = operate(operation, prev, current);

  // Show rounded number
  currentOperandElement.textContent = Math.round(computation * 100) / 100;
  operation = undefined;
  previousOperandElement.textContent = "";
}

// Update current operand when we click on a number
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

// Update operation when we click on an operation button
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.textContent);
  });
});

equalsButton.addEventListener("click", compute);

allClearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", deleteLastNumber);
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
