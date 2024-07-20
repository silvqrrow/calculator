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

let firstNum = "";
let secondNum = "";
let operator = [];

const operate = (firstNum, secondNum, operator) => {
  if (operator[0] === "+") {
    return add(firstNum, secondNum);
  } else if (operator[0] === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator[0] === "*") {
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

const ac = document.getElementById("ac");
const del = document.getElementById("del");

const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");

const appendToScreen = (char) => {
  if (screen.textContent.length < 10) {
    screen.textContent += char;
  }
};

const clearScreen = () => {
  screen.textContent = "";
};

const deleteScreen = () => {
  screen.textContent = screen.textContent.slice(0, -1);
};

ac.addEventListener("click", function (e) {
  clearScreen();
});

del.addEventListener("click", function (e) {
  deleteScreen();
});

zero.addEventListener("click", function (e) {
  appendToScreen("0");
  if (operator.length === 0) {
    firstNum = firstNum.concat("0");
  } else {
    secondNum = secondNum.concat("0");
  }
});

one.addEventListener("click", function (e) {
  appendToScreen("1");
  if (operator.length === 0) {
    firstNum = firstNum.concat("1");
  } else {
    secondNum = secondNum.concat("1");
  }
});

two.addEventListener("click", function (e) {
  appendToScreen("2");
  if (operator.length === 0) {
    firstNum = firstNum.concat("2");
  } else {
    secondNum = secondNum.concat("2");
  }
});

three.addEventListener("click", function (e) {
  appendToScreen("3");
  if (operator.length === 0) {
    firstNum = firstNum.concat("3");
  } else {
    secondNum = secondNum.concat("3");
  }
});

four.addEventListener("click", function (e) {
  appendToScreen("4");
  if (operator.length === 0) {
    firstNum = firstNum.concat("4");
  } else {
    secondNum = secondNum.concat("4");
  }
});

five.addEventListener("click", function (e) {
  appendToScreen("5");
  if (operator.length === 0) {
    firstNum = firstNum.concat("5");
  } else {
    secondNum = secondNum.concat("5");
  }
});

six.addEventListener("click", function (e) {
  appendToScreen("6");
  if (operator.length === 0) {
    firstNum = firstNum.concat("6");
  } else {
    secondNum = secondNum.concat("6");
  }
});

seven.addEventListener("click", function (e) {
  appendToScreen("7");
  if (operator.length === 0) {
    firstNum = firstNum.concat("7");
  } else {
    secondNum = secondNum.concat("7");
  }
});

eight.addEventListener("click", function (e) {
  appendToScreen("8");
  if (operator.length === 0) {
    firstNum = firstNum.concat("8");
  } else {
    secondNum = secondNum.concat("8");
  }
});

nine.addEventListener("click", function (e) {
  appendToScreen("9");
  if (operator.length === 0) {
    firstNum = firstNum.concat("9");
  } else {
    secondNum = secondNum.concat("9");
  }
});
