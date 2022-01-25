const reverseString = (string) => {
  let reversedString = 
    string
      .split('')
      .reverse()
      .join('');

  return reversedString;
}

module.exports = reverseString;