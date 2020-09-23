import React from "react";
import "../styles/Button.css";

function Button({ data, setInput, input }) {
  const isOperator = (x) => {
    return ["*", "/", "+", "-", "AC", "="].includes(x);
  };

  const isEmpty = (arr) => {
    return arr.length === 0;
  };

  const handleInput = (e) => {};
  return (
    <div>
      <button onClick={handleInput} value={data.name}>
        {data.name}
      </button>
    </div>
  );
}

export default Button;
