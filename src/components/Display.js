import React from "react";
import "../styles/Display.css";

function Display({ inputDisplay, outputDisplay }) {
  return (
    <div id="display__screen">
      <div id="output__screen">{outputDisplay}</div>
      <div id="display">{inputDisplay}</div>
    </div>
  );
}

export default Display;
