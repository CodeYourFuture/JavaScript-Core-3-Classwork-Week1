// This code should output:
//      Item #1 on the list is bread
//      Item #2 on the list is eggs
//      Item #3 on the list is milk

let arr = ["bread", "eggs", "milk"];
//syntax error assignment operator was missing, eggs missing semicolon
arr.forEach((item, index) => {
  //reference and programmer error. should be on arr, not items
  //syntax error arrow function incorrect changed it. Also if 2 parameters, requires a brackets around it
  console.log(`Item #${index + 1} on the list is ${item}`);
}); //syntax error closing curly bracket missing
