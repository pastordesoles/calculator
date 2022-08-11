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
        document.getElementById("result").value = ""
        getNumberTwo()
    }
  num1 = Number(document.getElementById("result").value);
  operand = "-";
  document.getElementById("result").value = "";
};

const plus = () => {
  if (total !== undefined) {
    num1 = total
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
      break;
    case "-":
      document.getElementById("result").value = "";
      total = num1 - num2;
      display(total);
      num1 = total;
      break;
    case "*":
      document.getElementById("result").value = "";
      total = num1 * num2;
      display(total);
      num1 = total;
      break;
    case "/":
      document.getElementById("result").value = "";
      total = num1 / num2;
      display(total);
      num1 = total;
      break;
  }
};

document.addEventListener("keydown", (event) => {
    if (event.key === "1") {
      display("1");
    }
    if (event.key === "2") {
      display("2");
    }
    if (event.key === "3") {
      display("3");
    }
    if (event.key === "4") {
      display("4");
    }
    if (event.key === "5") {
      display("5");
    }
    if (event.key === "6") {
      display("6");
    }
    if (event.key === "7") {
      display("7");
    }
    if (event.key === "8") {
      display("8");
    }
    if (event.key === "9") {
      display("9");
    }
    if (event.key === "0") {
      display("0");
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