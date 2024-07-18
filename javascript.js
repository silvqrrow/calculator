const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

let firstNum;
let secondNum;
let operator;

const operate = (firstNum, secondNum, operator) => {
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return multiply(firstNum, secondNum);
  } else {
    return divide(firstNum, secondNum);
  }
};

const screen = document.querySelector(".calculator__screen-main");
screen.textContent = "";

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");

const appendToScreen = (char) => {
  if (screen.textContent.length < 10) {
    screen.textContent += char;
  }
};

zero.addEventListener("click", function (e) {
  appendToScreen("0");
});

one.addEventListener("click", function (e) {
  appendToScreen("1");
});

two.addEventListener("click", function (e) {
  appendToScreen("2");
});

three.addEventListener("click", function (e) {
  appendToScreen("3");
});

four.addEventListener("click", function (e) {
  appendToScreen("4");
});

five.addEventListener("click", function (e) {
  appendToScreen("5");
});

six.addEventListener("click", function (e) {
  appendToScreen("6");
});

seven.addEventListener("click", function (e) {
  appendToScreen("7");
});

eight.addEventListener("click", function (e) {
  appendToScreen("8");
});

nine.addEventListener("click", function (e) {
  appendToScreen("9");
});
