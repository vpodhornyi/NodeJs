module.exports = (str, keys) => !str.split('')
  .reduce((acc, ch, i) => (i && keys[acc[acc.length - 1]] === ch ? acc.pop() : acc.push(ch)) && acc, [])
  .length;
