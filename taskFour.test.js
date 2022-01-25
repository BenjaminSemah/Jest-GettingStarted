const capitalize = require('./taskFour');

test('capitalize "hello" returns "Hello"', () => {
  expect(capitalize('hello')).toEqual('Hello');
});