import React from "react";
import Button from "./Button";
import "../styles/ButtonContainer.css";

function ButtonContainer({ data, input, setInput }) {
  return (
    <div id="button__container">
      {data.map((button) => (
        <Button data={button} setInput={setInput} input={input} />
      ))}
    </div>
  );
}

export default ButtonContainer;
