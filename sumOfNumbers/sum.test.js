const sum = require('./sum');

test('negative number - return 0', () => {
  const Sum = sum(-1);
  expect(Sum.getResult()).toBe(0)
})

test('single number (7) - return number', () => {
  const Sum = sum(7);
  expect(Sum.getResult()).toBe(7);
})

test('number 22 - return 4; sum of 2 + 2 = 4', () => {
  const Sum = sum(22);
  expect(Sum.getResult()).toBe(4);
})

test('number 2236 - return 4; sum of 2 + 2 + 3 + 6 = 13; 1 + 3 = 4', () => {
  const Sum = sum(2236);
  expect(Sum.getResult()).toBe(4);
})

test('number 99399 - return 3; sum of 2 + 2 + 3 + 6 = 39; 3 + 9 = 12; 1 + 2 = 3', () => {
  const Sum = sum(99399);
  expect(Sum.getResult()).toBe(3);
})
