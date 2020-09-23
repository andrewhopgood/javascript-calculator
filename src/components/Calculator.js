import React, { useState } from "react";
import "../styles/Calculator.css";
import Display from "../components/Display";
import ButtonContainer from "../components/ButtonContainer";

function Calculator({ data }) {
  const [input, setInput] = useState("");

  return (
    <div id="calculator">
      <Display input={input} setInput={setInput} />
      <ButtonContainer data={data} input={input} setInput={setInput} />
    </div>
  );
}

export default Calculator;
