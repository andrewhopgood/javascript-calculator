import React, { useState } from "react";
import "../styles/Calculator.css";
import Display from "../components/Display";
import ButtonContainer from "../components/ButtonContainer";

function Calculator({ data }) {
  const [inputDisplay, setInputDisplay] = useState("");
  const [outputDisplay, setOutputDisplay] = useState("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["*", "+", "/", "-"];
  const endsWithOperator = /[+/*-]$/;

  const handleClick = (e) => {
    let candidate = e.target.value;

    if (numbers.includes(candidate)) {
      updateDisplayWithNumber(candidate);
    }

    if (candidate === ".") {
      updateDisplayWithDecimal(candidate);
    }

    if (operators.includes(candidate)) {
      updateDisplayWithOperator(candidate);
    }

    if (candidate === "AC") {
      clearAll();
    }

    if (candidate === "=") {
      evaluateOutput();
    }
  };

  const clearAll = () => {
    setInputDisplay("0");
    setOutputDisplay("");
  };

  const evaluateOutput = () => {
    if (endsWithOperator.test(inputDisplay) || outputDisplay === "") {
      return;
    }

    evaluateString();
  };

  const updateDisplayWithOperator = (x) => {
    if (inputDisplay === "0" && outputDisplay === "" && x !== "-") {
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

  const updateDisplayWithNumber = (x) => {
    if (x === "0" && inputDisplay === "0" && outputDisplay.endsWith("0")) {
      return;
    }

    if (endsWithOperator.test(inputDisplay)) {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
      return;
    }

    if (inputDisplay === "0") {
      setOutputDisplay((prev) => prev + x);
      setInputDisplay(x);
      return;
    }
    setInputDisplay((prev) => prev + x);
    setOutputDisplay((prev) => prev + x);
  };

  const updateDisplayWithDecimal = (x) => {
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

  const evaluateString = () => {
    let evaluation = eval(outputDisplay);
    setInputDisplay(evaluation.toString());
    setOutputDisplay("");
  };

  return (
    <div id="calculator">
      <Display inputDisplay={inputDisplay} outputDisplay={outputDisplay} />
      <ButtonContainer data={data} handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
