import React from "react";
import "./App.css";
import ButtonData from "./ButtonData";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Calculator data={ButtonData} />
    </div>
  );
}

export default App;
