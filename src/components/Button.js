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
  //const endsWithOperator = /[\+\/\*\-]$/;
  const endsWithOperator = /[+/*-]$/;
  //const endsWithDecimal = /[.]$/;

  const isOperator = (x) => {
    if (inputDisplay === "0" && x !== "-") {
      return;
    }
    if (outputDisplay === "" && inputDisplay !== "0") {
      setOutputDisplay(inputDisplay + x);
      return setInputDisplay("0");
    }
    if (outputDisplay.endsWith("-")) {
      let outputDisplayCopy = outputDisplay;
      while (endsWithOperator.test(outputDisplayCopy)) {
        outputDisplayCopy = outputDisplayCopy.slice(0, -1);
      }
      return setOutputDisplay(outputDisplayCopy + x);
    }

    if (x !== "-" && endsWithOperator.test(outputDisplay)) {
      let newOutput = outputDisplay.slice(0, -1);
      setOutputDisplay(newOutput + x);
      return setInputDisplay(x);
    }

    if (x === "-" && endsWithOperator.test(outputDisplay)) {
      return setOutputDisplay((prev) => prev + x);
    }

    if (operators.includes(x)) {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
    }
  };

  const isNumber = (x) => {
    if (x === "0" && inputDisplay === "0") {
      return;
    }

    if (inputDisplay === "0") {
      setOutputDisplay((prev) => prev + x);
      return setInputDisplay(x);
    }

    if (
      inputDisplay === "+" ||
      inputDisplay === "*" ||
      inputDisplay === "/" ||
      inputDisplay === "-"
    ) {
      setOutputDisplay((prev) => prev + x);
      return setInputDisplay(x);
    }
    setInputDisplay((prev) => prev + x);
    setOutputDisplay((prev) => prev + x);
  };

  const isDecimal = (x) => {
    if (inputDisplay.includes(".")) {
      return;
    }

    if (endsWithOperator.test(outputDisplay)) {
      setInputDisplay("0" + x);
      return setOutputDisplay((prev) => prev + "0.");
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
      setInputDisplay("0");
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
      setInputDisplay(eval(outputDisplay));
      return setOutputDisplay("");
    }
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
