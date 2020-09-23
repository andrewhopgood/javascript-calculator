const Calculator = require("./Calculator");

describe("Calculator", () => {
  test(".getTape() initially returns an empty arrary", () => {
    const c = Calculator();
    expect(c.getTape()).toStrictEqual([]);
  });

  test(".setTape() sets value of .tape property", () => {
    const c = Calculator();
    c.setTape([1, 2, 3]);
    expect(c.getTape()).toStrictEqual([1, 2, 3]);
  });

  describe(".isOperator()", () => {
    test("+ is an operator", () => {
      const c = Calculator();
      expect(c.isOperator("+")).toBe(true);
    });

    test("* is an operator", () => {
      const c = Calculator();
      expect(c.isOperator("*")).toBe(true);
    });

    test("/ is an operator", () => {
      const c = Calculator();
      expect(c.isOperator("/")).toBe(true);
    });

    test("- is an operator", () => {
      const c = Calculator();
      expect(c.isOperator("-")).toBe(true);
    });
  });

  describe(".push()", () => {
    test("can push a single number onto tape", () => {
      const c = Calculator();
      const rs = c.push(2);
      expect(rs).toBe(true);
      expect(c.getTape()).toStrictEqual([2]);
    });

    test("multi-digit numbers onto tape", () => {
      const c = Calculator();
      const rs = c.push(227);
      expect(rs).toBe(true);
      expect(c.getTape()).toStrictEqual([227]);
    });

    test("+ cannot be first item in tape", () => {
      const c = Calculator();
      expect(c.push("+")).toBe(false);
    });

    test("* cannot be first item in tape", () => {
      const c = Calculator();
      expect(c.push("*")).toBe(false);
    });

    test("/ cannot be first item in tape", () => {
      const c = Calculator();
      expect(c.push("/")).toBe(false);
    });

    test.skip("'-' can be first item in tape", () => {
      const c = Calculator();

      expect(c.push("-")).toBe(true);
    });
  });

  describe(".reset()", () => {
    test("tape should be empty", () => {
      const c = Calculator();
      c.setTape([1, 2, 3]); // given the tap is [1,2,34]
      c.reset();
      expect(c.getTape()).toStrictEqual([]); //then its hould
    });
  });

  describe(".getTapeAsString()", () => {
    test("tape should be a string", () => {
      const c = Calculator();
      const s = c.getTapeAsString();
      expect(typeof s).toBe("string");
    });

    test("tape with specific value is valid", () => {
      const c = Calculator();
      c.push(3);
      c.push("+");
      c.push(5);
      c.push("*");
      c.push(10);
      const s = c.getTapeAsString();
      expect(s).toBe("3+5*10");
    });

    test("tape with specific value is valid", () => {
      const c = Calculator();
      c.push("-3");
      c.push("-");
      c.push(5);
      c.push("*");
      c.push(10);
      const s = c.getTapeAsString();
      expect(s).toBe("-3-5*10");
    });
  });

  test.skip("numbers [ 0-9 ]  can be first item in tape", () => {
    expect(false).toBe(true);
  });

  test.skip("'.' can be first item in tape", () => {
    expect(false).toBe(true);
  });
});
