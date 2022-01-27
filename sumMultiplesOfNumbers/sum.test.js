const sum = require('./sum');

test('is negative number - return 0', () => {
  expect(sum(-12)).toBe(0);
})

test('number 12 - return 3 + 5 + 6 + 9 + 10 + 12', () => {
  expect(sum(12)).toBe(33);
})
