import React from "react";
import Button from "./Button";
import "../styles/ButtonContainer.css";

function ButtonContainer({ data, handleClick }) {
  return (
    <div id="button__container">
      {data.map((button) => (
        <Button data={button} key={button.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default ButtonContainer;
