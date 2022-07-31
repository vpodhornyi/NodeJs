const arr = ["flower", "flow", "flight"];

let res = "";
let j = 0;

for (let i = 0, ln = arr.length - 1; i < ln; i++) {

  if (arr[i][j] !== arr[i + 1][j]) break;

  if (i === ln - 1) {
    i = 0;
    res += arr[i][j];
    j++;
  }
}

console.log(res);
