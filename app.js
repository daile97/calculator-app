export default function main() {
  const LOWER_SCREEN = document.getElementById("lower-screen");
  const UPPER_SCREEN = document.getElementById("upper-screen");
  const NUM_BTNS = document.querySelectorAll(".num");
  const RESET_BTN = document.getElementById("reset");
  const OPERATOR_BTNS = document.querySelectorAll(".operator");
  const DEL_BTN = document.getElementById("del");
  const EQUAL_BTN = document.getElementById("equal");
  const MAX_LENGTH = 14;

  let inputString = "";
  let result = "";
  let prevOperator = "";
  let operator = "";
  let operand1 = "";
  let operand2 = "";
  let error = false;

  function displayResult(value) {
    LOWER_SCREEN.innerHTML =
      value.length <= MAX_LENGTH
        ? value
        : String(Number(value).toExponential(5));
  }

  function updateInputString(value) {
    inputString = inputString.concat(value);
  }

  function reset() {
    inputString = "";
    result = "";
    operator = "";
    operand1 = "";
    operand2 = "";
    error = false;
    UPPER_SCREEN.innerHTML = "";
  }

  function calc(operator, v1, v2) {
    switch (operator) {
      case "+":
        return String(v1 + v2);
      case "-":
        return String(v1 - v2);
      case "x":
        return String(v1 * v2);
      case "/":
        if (v2 === 0) {
          error = true;
          return "Can't devide by zero";
        }
        return String(v1 / v2);
      default:
        return String(v1 + v2);
    }
  }

  NUM_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      const newValue = btn.dataset.value;
      if (error) {
        reset();
      }
      if (inputString.length === MAX_LENGTH) return;
      if (newValue === "." && inputString.includes(".")) return;
      if (
        newValue === "0" &&
        inputString.startsWith("0") &&
        inputString[1] !== "."
      )
        return;
      prevOperator = operator;
      updateInputString(newValue);
      operand2 = operand2.concat(newValue);
      LOWER_SCREEN.innerHTML = inputString;
    });
  });

  OPERATOR_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      result = calc(prevOperator, Number(operand1), Number(operand2));
      operand1 = result;
      operator = btn.dataset.value;
      UPPER_SCREEN.innerHTML = operand1 + " " + btn.dataset.value;
      inputString = "";
      operand2 = "";
    });
  });

  RESET_BTN.addEventListener("click", () => {
    reset();
    LOWER_SCREEN.innerHTML = "0";
  });

  DEL_BTN.addEventListener("click", () => {
    inputString = inputString.slice(0, -1);
    operand2 = inputString;
    LOWER_SCREEN.innerHTML = inputString;
  });

  EQUAL_BTN.addEventListener("click", () => {
    result = calc(operator, Number(operand1), Number(operand2));
    UPPER_SCREEN.innerHTML =
      operand1 + " " + operator + " " + Number(operand2) + " " + "=";
    displayResult(result);
    console.log(result);
    inputString = "";
  });
}
