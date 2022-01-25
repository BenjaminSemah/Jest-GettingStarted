const Calculator = require('./taskThree');

describe('Calculator', () => {
  describe('add two numbers', () => {
    test('addition of 4 and 2 gives 6', () => {
      const myCalc = new Calculator(4, 2);
      expect(myCalc.add()).toBe(6);
    });

    test('addition of 1 and 2 not 4', () => {
      const myCalc = new Calculator(1, 2);
      expect(myCalc.add()).not.toBe(4);
    });

    test('addition of 2 positive numbers should be positive', () => {
      const myCalc = new Calculator(8, 7);
      expect(myCalc.add()).toBeGreaterThan(0);
    });

    test('addition of 2 negative numbers should be negative', () => {
      const myCalc = new Calculator(-3, -5);
      expect(myCalc.add()).toBeLessThan(0);
    })
  });

  describe('subtract one number from another', () => {
    test('subtracting 2 from 3 gives 1', () => {
      const myCalc = new Calculator(3, 2);
      expect(myCalc.subtract()).toEqual(1);
    });

    test('subtract a number from gives the number', () => {
      const myCalc = new Calculator(9, 0);
      expect(myCalc.subtract()).toBe(9);
    });

    test('subtract a +number from +number gives a number >=0', () => {
      const myCalc = new Calculator(25, 23);
      expect(myCalc.subtract()).toBeGreaterThanOrEqual(0);
    });

    test('subtract a number from the same number gives 0', () => {
      const myCalc = new Calculator(7, 7);
      expect(myCalc.subtract()).toEqual(0);
    });
  });

  describe('multiply two numbers', () => {
    test('multiplying 2 and 3 gives 6', () => {
      const myCalc = new Calculator(2, 3);
      expect(myCalc.multiply()).toEqual(6);
    });

    test('multiply a number by 0 gives 0', () => {
      const myCalc = new Calculator(2, 0);
      expect(myCalc.multiply()).toBe(0);
    });

    test('multiply a number by 1 gives that number', () => {
      const myCalc = new Calculator(3, 1);
      expect(myCalc.multiply()).toEqual(3)
    });

    test('multiply 2 negative numbers gives a positive', () => {
      const myCalc = new Calculator(-3, -1);
      expect(myCalc.multiply()).toBeGreaterThan(0);
    });
  });

  describe('divide one number by another', () => {
    test('divide 6 by 3 gives 2', () => {
      const myCalc = new Calculator(6, 3);
      expect(myCalc.divide()).toBe(2);
    });

    test('divide a number by 0', () => {
      const myCalc = new Calculator(3, 0);
      expect(myCalc.divide()).toEqual(Infinity);
    });

    test('divide a number itself gives 1', () => {
      const myCalc = new Calculator(3, 3);
      expect(myCalc.divide()).toEqual(1);
    });

    test('divide a number by a greater number gives a fraction', () => {
      const myCalc = new Calculator(3, 6);
      expect(myCalc.divide()).toBeLessThan(1);
    });
  });
});