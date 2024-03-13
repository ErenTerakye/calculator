let firstNum;
let operator;
let secondNum;
let currentNum = "";

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else if (operator === "/") {
    return divide(firstNum, secondNum);
  } else {
    return "ERROR";
  }
}

const container = document.querySelector("#container");
const display = document.querySelector("#display");
container.addEventListener("click", (event) => {
  if (event.target.className === "number") {
    if (typeof(operator) === "undefined") {
      currentNum += event.target.textContent;
      firstNum = Number(currentNum);
      display.textContent = firstNum;
    } else {
      currentNum += event.target.textContent;
      secondNum = Number(currentNum);
      display.textContent = secondNum;
    }
  } else if (event.target.className === "operator") {
    if (typeof(operator) === "undefined") {
      operator = event.target.textContent;
      currentNum = "";
    } else {
      firstNum = operate(operator, firstNum, secondNum);
      display.textContent = firstNum;
      operator = event.target.textContent;
      secondNum = undefined;
      currentNum = "";
    }
  } else if (event.target.textContent === "=") {
    display.textContent = operate(operator, firstNum, secondNum);
  } else if (event.target.textContent === "C") {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    currentNum = "";
    display.textContent = 0;
  }
});