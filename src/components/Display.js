import React from "react";
import "../styles/Display.css";

function Display({ input, setInput }) {
  console.log(input);
  return (
    <div id="display">
      <div id="output__screen"></div>
      <div id="input__screen">{input}</div>
    </div>
  );
}

export default Display;
