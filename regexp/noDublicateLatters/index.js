const str = 'ad';
const str2 = 'add';

console.log(!/(\w).*\1/i.test(str)) // true
console.log(!/(\w).*\1/i.test(str2)) // false
