// Operator Functions

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

// Initialization of operators and numbers
let firstNum = "";
let secondNum = "";
let operator = [];
let clear = false;

// Screen initialization
const screen = document.querySelector(".calculator__screen-main");
screen.textContent = "";

// Numbers
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

// Clearing and Deleting
const ac = document.getElementById("ac");
const del = document.getElementById("del");

// Operators
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");
const equals = document.getElementById("equals");
const signChange = document.getElementById("sign-change");

// Decimal
const decimal = document.getElementById(".");

// Screen Operators
const appendToScreen = (char) => {
  if (clear) {
    clearScreen();
    clear = false;
  }
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

// Operator Click Events
equals.addEventListener("click", function (e) {
  if (firstNum.length > 0 && secondNum.length > 0 && operator.length > 0) {
    let result = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator[0]
    ).toString();
    screen.textContent = result.slice(0, 8);
    firstNum = result;
    secondNum = "";
    operator = [];
  }
});

signChange.addEventListener("click", function (e) {
  if (
    operator.length === 0 &&
    firstNum === screen.textContent &&
    firstNum.length > 0
  ) {
    firstNum = (parseFloat(firstNum) * -1).toString();
    screen.textContent = firstNum;
  } else if (
    operator.length > 0 &&
    secondNum === screen.textContent &&
    secondNum.length > 0
  ) {
    secondNum = (parseFloat(secondNum) * -1).toString();
    screen.textContent = secondNum;
  }
});

plus.addEventListener("click", function (e) {
  if (operator.length === 0 && firstNum.length > 0) {
    operator.push("+");
    clear = true;
  } else if (firstNum.length > 0 && secondNum.length > 0) {
    let result = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator[0]
    ).toString();
    firstNum = result;
    screen.textContent = result.slice(0, 8);
    operator.pop();
    operator.push("+");
    secondNum = "";
    clear = true;
  } else if (operator.length > 0) {
    operator[0] = "+";
  }
});

minus.addEventListener("click", function (e) {
  if (operator.length === 0 && firstNum.length > 0) {
    operator.push("-");
    clear = true;
  } else if (firstNum.length > 0 && secondNum.length > 0) {
    let result = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator[0]
    ).toString();
    firstNum = result;
    screen.textContent = result.slice(0, 8);
    operator.pop();
    operator.push("-");
    secondNum = "";
    clear = true;
  } else if (operator.length > 0) {
    operator[0] = "-";
  }
});

multi.addEventListener("click", function (e) {
  if (operator.length === 0 && firstNum.length > 0) {
    operator.push("*");
    clear = true;
  } else if (firstNum.length > 0 && secondNum.length > 0) {
    let result = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator[0]
    ).toString();
    firstNum = result;
    screen.textContent = result.slice(0, 8);
    operator.pop();
    operator.push("*");
    secondNum = "";
    clear = true;
  } else if (operator.length > 0) {
    operator[0] = "*";
  }
});

divi.addEventListener("click", function (e) {
  if (operator.length === 0 && firstNum.length > 0) {
    operator.push("/");
    clear = true;
  } else if (firstNum.length > 0 && secondNum.length > 0) {
    let result = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator[0]
    ).toString();
    firstNum = result;
    screen.textContent = result.slice(0, 8);
    operator.pop();
    operator.push("/");
    secondNum = "";
    clear = true;
  } else if (operator.length > 0) {
    operator[0] = "/";
  }
});

// Clear and Delete click events
ac.addEventListener("click", function (e) {
  clearScreen();
  firstNum = "";
  secondNum = "";
  operator = [];
});

del.addEventListener("click", function (e) {
  deleteScreen();
  if (operator.length === 0) {
    firstNum = firstNum.slice(0, -1);
  } else {
    secondNum = secondNum.slice(0, -1);
  }
});

// Decimal click event
decimal.addEventListener("click", function (e) {
  if (firstNum.length > 0 && operator.length === 0 && !firstNum.includes(".")) {
    appendToScreen(".");
    firstNum = firstNum.concat(".");
  } else if (secondNum.length > 0 && !secondNum.includes(".")) {
    appendToScreen(".");
    secondNum = secondNum.concat(".");
  }
});

// Number click events
zero.addEventListener("click", function (e) {
  appendToScreen("0");
  if (operator.length === 0 && firstNum.length > 0) {
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
