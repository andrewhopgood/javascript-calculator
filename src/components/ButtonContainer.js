import React from "react";
import Button from "./Button";
import "../styles/ButtonContainer.css";

function ButtonContainer({
  data,
  inputDisplay,
  setInputDisplay,
  outputDisplay,
  setOutputDisplay,
}) {
  return (
    <div id="button__container">
      {data.map((button) => (
        <Button
          data={button}
          setInputDisplay={setInputDisplay}
          inputDisplay={inputDisplay}
          outputDisplay={outputDisplay}
          setOutputDisplay={setOutputDisplay}
          key={button.id}
        />
      ))}
    </div>
  );
}

export default ButtonContainer;
