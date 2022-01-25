const stringLength = require('./taskOne');

test('length of hello is 5', () => {
  expect(stringLength('hello')).toEqual(5);
});

test('length of photosynthesis is incorrect', () => {
  expect(() => stringLength('photosynthesis')).toThrow();
});