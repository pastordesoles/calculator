//let output = document.getElementById("result").value;
let num1;
let num2;
let operand;
let total;

const clearScreen = () => {
  document.getElementById("result").value = "";
  num1 = undefined;
  num2 = undefined;
  total = undefined
  operand = undefined
};

const display = (value) => {
  document.getElementById("result").value += value;
};

const addPoint = () => {
    let hasPoint = document.getElementById("result").value
    if (!hasPoint.includes('.')){
        display(".");
    }
};

const getNumberTwo = () => {
    num2 = Number(document.getElementById("result").value);
    operations()
}

const minus = () => {
    if (total !== undefined) {
        num1 = total
        operand = "-"
        document.getElementById("result").value = ""
        getNumberTwo()
    }
  num1 = Number(document.getElementById("result").value);
  operand = "-";
  document.getElementById("result").value = "";
};

const plus = () => {
  if (total !== undefined && operand === "=") {
    num1 = total
    operand = "+"
    document.getElementById("result").value = ""
    getNumberTwo();
  }
  num1 = Number(document.getElementById("result").value);
  operand = "+";
  document.getElementById("result").value = "";
};

const mult = () => {
    if (total !== undefined) {
        num1 = total
        operand = "*"
        document.getElementById("result").value = ""
        getNumberTwo()
    }
  num1 = Number(document.getElementById("result").value);
  operand = "*";
  document.getElementById("result").value = "";
};

const div = () => {
    if (total !== undefined) {
        num1 = total
        operand = "/"
        document.getElementById("result").value = ""
        getNumberTwo()
    }
  num1 = Number(document.getElementById("result").value);
  operand = "/";
  document.getElementById("result").value = "";
};

const calculate = () => {
  num2 = Number(document.getElementById("result").value);
  if (num1 === undefined || num2 === undefined || isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").value = "";
    display("Error");
  } else {
    operations();
  }
};

const operations = () => {
  switch (operand) {
    case "+":
      document.getElementById("result").value = "";
      total = num1 + num2;
      display(total);
      operand = "="
      break;
    case "-":
      document.getElementById("result").value = "";
      total = num1 - num2;
      display(total);
      operand = "="
      num1 = total;
      break;
    case "*":
      document.getElementById("result").value = "";
      total = num1 * num2;
      display(total);
      operand = "="
      num1 = total;
      break;
    case "/":
      document.getElementById("result").value = "";
      total = num1 / num2;
      display(total);
      operand = "="
      num1 = total;
      break;
  }
};

const numberClick = (number) => {
    if (operand === "=") {
        clearScreen()
    }
    display(number);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "1") {
        numberClick('1');
    }
    if (event.key === "2") {
        numberClick('2');
    }
    if (event.key === "3") {
        numberClick('3');
    }
    if (event.key === "4") {
        numberClick('4');
    }
    if (event.key === "5") {
        numberClick('5');
    }
    if (event.key === "6") {
        numberClick('6');
    }
    if (event.key === "7") {
        numberClick('7');
    }
    if (event.key === "8") {
        numberClick('8');
    }
    if (event.key === "9") {
        numberClick('9');
    }
    if (event.key === "0") {
        numberClick('0');
    }
    if (event.key === ".") {
      addPoint();
    }
    if (event.key === "+") {
      plus();
    }
    if (event.key === "-") {
      minus();
    }
    if (event.key === "*") {
      mult();
    }
    if (event.key === "/") {
      div();
    }
    if (event.key === "Enter") {
      calculate();
    }
    if (event.key === "c") {
      clearScreen();
    }
  });