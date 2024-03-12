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
    return firstNum + secondNum;
  } else if (operator === "-") {
    return firstNum - secondNum;
  } else if (operator === "*") {
    return firstNum * secondNum;
  } else if (operator === "/") {
    return firstNum / secondNum;
  } else {
    return "ERROR";
  }
}

const container = document.querySelector("#container");
const display = document.querySelector("#display");
container.addEventListener("click", (event) => {
  if (event.target.className === "number") {
    currentNum += event.target.textContent;
    display.textContent = currentNum;
  } else if (event.target.className === "operator") {
    if (event.target.textContent !== "=") {
      operator = event.target.textContent;
    }
    console.log(typeof(operator))
    if (firstNum === undefined) {
      firstNum = Number(currentNum);
      currentNum = "";
    } else if (secondNum === undefined) {
      secondNum = Number(currentNum);
      currentNum = "";
      if (event.target.textContent = "=") {
        display.textContent = operate(operator, firstNum, secondNum);
      }
    }
  } else if (event.target.className === "clear") {
    display.textContent = 0;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
  }
});