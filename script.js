



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
