import React from "react";
import "../styles/Button.css";

function Button({
  data,
  setInputDisplay,
  inputDisplay,
  outputDisplay,
  setOutputDisplay,
}) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["*", "+", "/", "-"];
  const endsWithOperator = /[+/*-]$/;

  const isOperator = (x) => {
    if (inputDisplay === "" && outputDisplay === "" && x !== "-") {
      return;
    }
    if (outputDisplay === "" && inputDisplay !== "0") {
      setOutputDisplay(inputDisplay + x);
      setInputDisplay("0");
      return;
    }
    if (inputDisplay === ".") {
      setOutputDisplay((prev) => prev + "0" + x);
      setInputDisplay(x);
      return;
    }
    if (outputDisplay.endsWith("-")) {
      let outputDisplayCopy = outputDisplay;
      while (endsWithOperator.test(outputDisplayCopy)) {
        outputDisplayCopy = outputDisplayCopy.slice(0, -1);
      }
      setOutputDisplay(outputDisplayCopy + x);
      return;
    }

    if (x !== "-" && endsWithOperator.test(outputDisplay)) {
      let newOutput = outputDisplay.slice(0, -1);
      setOutputDisplay(newOutput + x);
      setInputDisplay(x);
      return;
    }

    if (x === "-" && endsWithOperator.test(outputDisplay)) {
      setOutputDisplay((prev) => prev + x);
      return;
    }

    if (operators.includes(x)) {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
    }
  };

  const isNumber = (x) => {
    if (x === "0" && inputDisplay === "0" && outputDisplay.endsWith("0")) {
      return;
    }

    if (inputDisplay === "0") {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
      return;
    }

    if (
      inputDisplay === "+" ||
      inputDisplay === "*" ||
      inputDisplay === "/" ||
      inputDisplay === "-"
    ) {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
      return;
    }
    setInputDisplay((prev) => prev + x);
    setOutputDisplay((prev) => prev + x);
  };

  const isDecimal = (x) => {
    if (outputDisplay === "" && inputDisplay.includes(".") === false) {
      setOutputDisplay(inputDisplay + x);
      setInputDisplay(inputDisplay + x);
      return;
    }

    if (inputDisplay.includes(".")) {
      return;
    }

    if (endsWithOperator.test(outputDisplay)) {
      setInputDisplay("0" + x);
      setOutputDisplay((prev) => prev + "0.");
      return;
    }
    setOutputDisplay((prev) => prev + x);
    setInputDisplay(inputDisplay + x);
  };

  const handleClickButton = (e) => {
    const candidate = e.target.value;

    if (numbers.includes(candidate)) {
      isNumber(candidate);
    }
    if (candidate === ".") {
      isDecimal(candidate);
    }
    if (operators.includes(candidate)) {
      isOperator(candidate);
    }
    if (candidate === "AC") {
      setInputDisplay("");
      setOutputDisplay("");
    }
    if (candidate === "=") {
      if (
        inputDisplay === "+" ||
        inputDisplay === "-" ||
        inputDisplay === "*" ||
        inputDisplay === "/"
      ) {
        return;
      }
      if (outputDisplay === "") {
        return;
      }

      evaluateString();
    }
  };

  const evaluateString = () => {
    let newStr = new String(eval(outputDisplay));
    setInputDisplay(newStr);
    setOutputDisplay("");
  };

  return (
    <div>
      <button onClick={handleClickButton} value={data.name} id={data.id}>
        {data.name}
      </button>
    </div>
  );
}

export default Button;
