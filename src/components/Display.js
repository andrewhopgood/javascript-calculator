import React from "react";
import "../styles/Display.css";

function Display({ inputDisplay, outputDisplay }) {
  return (
    <div id="display__panel">
      <div id="output-display">{outputDisplay}</div>
      <div id="input-display">{inputDisplay}</div>
    </div>
  );
}

export default Display;
