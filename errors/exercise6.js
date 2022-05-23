// This code should output:
//      Item #1 on the list is bread
//      Item #2 on the list is eggs
//      Item #3 on the list is milk

// original
/*
let arr  ["bread", eggs", "milk"];

items.forEach(item, index -> {
    console.log(`Item #${index + 1} on the list is ${item}`);
};
*/

// soluton - ----------------------not solved
let arr = [
  "bread",
  "eggs",
  "milk",
  //formatted
];

arr.forEach(arr, (arr) => {
  console.log(`Item #${arr + 1} on the list is ${arr}`);
});
