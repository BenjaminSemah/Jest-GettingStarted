const capitalize = (string) => {
  let firstLetter = string[0].toUpperCase();
  let others = 
    string
      .split('')
      .splice(1, string.length-1)
      .join('');
  
  let capString = firstLetter + others;
  return capString;
};

module.exports = capitalize;
