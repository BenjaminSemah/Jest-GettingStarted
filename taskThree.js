class Calculator {
  constructor(num1, num2) {
    this.firstNum = num1;
    this.secondNum = num2;
  }

  add() {
    return this.firstNum + this.secondNum;
  };

  subtract() {
    return this.firstNum - this.secondNum;
  };

  divide() {
    return this.firstNum / this.secondNum;
  };

  multiply() {
    return this.firstNum * this.secondNum;
  };
}

let myCalc = new Calculator(4, 2);

module.exports = Calculator;