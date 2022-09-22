// `TypeError: numbers.map is not a function`;
let numbers = { a: 13, b: 37, c: 42 };

function double(num) {
  return num * 2;
}
let totalArr = [];
totalArr.push(Object.values(numbers));

console.log(totalArr);
