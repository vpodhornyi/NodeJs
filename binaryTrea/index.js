const foo = {
  value: 3,
  left: {
    value: 4,
    left: {
      value: 1,
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 2,
    left: {
      value: 11
    }
  }
}
const sumTree = (tree, value) => {
  let sum = tree.value;
  if (tree.value === value) return;

  if (tree.hasOwnProperty("left")) sum += sumTree(tree.left);
  if (tree.hasOwnProperty("right")) sum += sumTree(tree.right);
  return sum;
}

console.log(sumTree(foo, 1));

var d = 'test';
function s() {
  var d = 1;
  return function () {return ++d}

}
const f = s();
function a() {
  var d = 'kuku';
  return function () {return d;}
}

console.log(f());
console.log(f());
console.log(a()());
