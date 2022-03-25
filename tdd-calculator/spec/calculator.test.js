const Calculator = require("../calculator");

describe("Calculator", () => {
  it("initializes with 0", () => {
    let calculator = new Calculator();

    expect(calculator.getCurrentState()).toEqual(0);
  });

  it("will add numbers together", () => {
    let calculator = new Calculator();

    expect(calculator.addInputs(2, 3)).toEqual(5);
  });

  it("will add multiple numbers together", () => {
    let calculator = new Calculator();
    expect(calculator.addInputs(1, 3, 5)).toEqual(9);
    expect(calculator.addInputs(5, 5, 10, 10, 20, 10, 3)).toEqual(63);
  });

  it("will multiply numbers together", () => {
    let calculator = new Calculator();

    expect(calculator.multiplyInputs(3, 5)).toEqual(15);
  });

  it("will multiply many numbers together", () => {
    let calculator = new Calculator();

    expect(calculator.multiplyInputs(2, 4, 6)).toEqual(48);
  });

  it("will divide one number by another", () => {
    let calculator = new Calculator();

    expect(calculator.divideInputs(10, 2)).toEqual(5);
    expect(calculator.divideInputs(5)).toEqual(5);
  });

  it("will calculate the difference between numbers", () => {
    let calculator = new Calculator();

    expect(calculator.subtractInputs(10, 4)).toEqual(6);
    expect(calculator.subtractInputs(10, 3, 2)).toEqual(5);
  });

  it("will raise a number to the given power", () => {
    let calculator = new Calculator();

    expect(calculator.toPower(3, 2)).toEqual(9);
    expect(calculator.toPower(2, 3)).toEqual(8);
  });

  it("will give the square root of a number and round to 2 decimal places if not an integer", () => {
    let calculator = new Calculator();

    expect(calculator.squareRoot(4)).toEqual(2);
    expect(calculator.squareRoot(9)).toEqual(3);
    expect(calculator.squareRoot(10)).toEqual(3.16);
  });

  it("will clear the status of the calculator when button clicks", () => {
    let calculator = new Calculator();

    expect(calculator.getCurrentState()).toEqual(0);
    expect(calculator.clearCurrentStatus()).toEqual(true);

    calculator.addInputs(1, 2, 3);
    expect(calculator.getCurrentState()).toEqual(6);
    expect(calculator.clearCurrentStatus()).toEqual(true);
    expect(calculator.getCurrentState()).toEqual(0);
  });

  it("allows you to change the +/- of a number to the opposite", () => {
    let calculator = new Calculator();
    let positiveInput = 5;
    let negativeInput = -10;

    expect(calculator.negPosReversal(positiveInput)).toEqual(-5);
    expect(calculator.negPosReversal(negativeInput)).toEqual(10);
  });
});
