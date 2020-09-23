// revealing module pattern
const Calculator = () => {
  let tape = [];

  const setTape = (newTape) => {
    tape = newTape;
  };

  const getTape = () => {
    return tape;
  };

  const isTapeEmpty = () => {
    return tape.length === 0;
  };

  const isOperator = (x) => {
    let whitelist = ["+", "*", "/", "-"];
    return whitelist.includes(x);
  };

  const pushOntoTape = (x) => {
    if (isOperator(x) && isTapeEmpty()) {
      return false;
    }
    tape.push(x);
    return true;
  };

  const reset = () => {
    setTape([]);
  };

  const getTapeAsString = () => {
    return tape.join("");
  };

  const calculate = () => {
    const code = getTapeAsString();
    return eval(code);
  };

  // define the public api and return for consumption
  return {
    //
    setTape: setTape,
    getTape: getTape,
    push: pushOntoTape,
    isOperator: isOperator,
    reset: reset,
    getTapeAsString: getTapeAsString,
    calculate: calculate,
  };
};

module.exports = Calculator;
