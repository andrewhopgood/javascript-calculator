import React, { useState } from "react";
import "../styles/Calculator.css";
import Display from "../components/Display";
import ButtonContainer from "../components/ButtonContainer";

function Calculator({ data }) {
  const [inputDisplay, setInputDisplay] = useState("");
  const [outputDisplay, setOutputDisplay] = useState("");
  return (
    <div id="calculator">
      <Display inputDisplay={inputDisplay} outputDisplay={outputDisplay} />
      <ButtonContainer
        data={data}
        inputDisplay={inputDisplay}
        setInputDisplay={setInputDisplay}
        outputDisplay={outputDisplay}
        setOutputDisplay={setOutputDisplay}
      />
    </div>
  );
}

export default Calculator;
