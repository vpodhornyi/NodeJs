const isCorrectBrackets = require('./index');
const openCloseKeys = {
  '{': '}',
  '(': ')',
  '[': ']',
}

test('expect true ', () => {
  const foo2 = '(){(({[]}))}';
  expect(isCorrectBrackets(foo2, openCloseKeys)).toBe(true)
})

test('expect false ', () => {
  const foo2 = '(){(({[]}))}}';
  expect(isCorrectBrackets(foo2, openCloseKeys)).toBe(false)
})

test('expect false ', () => {
  const foo2 = '(){(({[]}))}}{';
  expect(isCorrectBrackets(foo2, openCloseKeys)).toBe(false)
})
