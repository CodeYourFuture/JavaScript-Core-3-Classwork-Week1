// This code should output:
//      Item #1 on the list is bread
//      Item #2 on the list is eggs
//      Item #3 on the list is milk

let arr = ["bread", "eggs", "milk"];

arr.forEach((item, index) => {
  console.log(`Item #${index + 1} on the list is ${item}`);
});
