import React from "react";
import "../styles/Button.css";

function Button({ data, handleClick }) {
  return (
    <div>
      <button onClick={handleClick} value={data.name} id={data.id}>
        {data.name}
      </button>
    </div>
  );
}

export default Button;
