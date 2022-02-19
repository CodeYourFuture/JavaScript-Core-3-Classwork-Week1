// This code should output:
//      Item #1 on the list is bread
//      Item #2 on the list is eggs
//      Item #3 on the list is milk

let arr = ["bread", "eggs", "milk"];

arr.forEach((items, index) => {
  console.log(`Item #${index} on the list is ${items}`);
});
