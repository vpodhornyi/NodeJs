console.log([...new Set([1, 2, 3, 4, 4])]);
console.log(Number(''));

const arr = [1, 10, 5, 15];
console.log(arr.sort((a, b) => a - b)
  .filter((a, i) => i < 2)
  .reduce((a, b) => a + b));


function validatePIN(pin) {
  //return true or false
  if (pin.length === 4 || pin.length === 6) {

    return pin.length === pin.split('').map(v => parseInt(v)).filter(v => typeof v === 'number' && v >= 0).length
  }
  return false;
}

console.log(validatePIN('123\n'));


const str = 'recede';

const arr3 = [...str];
console.log(str.replace(/./gi, ch => str.indexOf(ch) === str.lastIndexOf(ch) ? '(' : ')'));

console.log([...'swdwed'])
