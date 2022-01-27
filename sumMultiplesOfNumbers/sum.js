module.exports = n => n < 0 ? 0 : [...new Array(n).keys()]
  .filter(v => v % 3 === 0 || v % 5 === 0)
  .reduce((a, b) => a + b)
