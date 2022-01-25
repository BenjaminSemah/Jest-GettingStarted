const reverseString = require('./taskTwo');

test('Reverse of hello is olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});