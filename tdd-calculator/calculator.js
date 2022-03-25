class Calculator {
  constructor() {
    this.state = 0;
  }
  setState(val) {
    this.state = val;
    return this.state;
  }
  getCurrentState() {
    return this.state;
  }
  addInputs(...numbers) {
    let output = numbers.reduce((acc, val) => acc + val, 0);
    return this.setState(output);
  }
  multiplyInputs(...numbers) {
    let output = numbers.reduce((acc, val) => acc * val, 1);
    return this.setState(output);
  }
  divideInputs(a, b) {
    let output = b ? a / b : a;
    return this.setState(output);
  }
  subtractInputs(...args) {
    let output = args.reduce((acc, val) => acc - val);
    return this.setState(output);
  }
  toPower(a, b) {
    let output = Math.pow(a, b);
    return this.setState(output);
  }
  squareRoot(a) {
    let root = Math.pow(a, 0.5);
    let output = root % 1 !== 0 ? parseFloat(root.toFixed(2)) : root;
    return this.setState(output);
  }
  clearCurrentStatus() {
    this.setState(0);

    return true;
  }
  negPosReversal(a) {
    return 0 - a;
  }
}

module.exports = Calculator;
