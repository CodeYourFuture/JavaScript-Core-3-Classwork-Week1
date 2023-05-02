let numbers = { a: 13, b: 37, c: 42 };

for (let key in numbers) {
  numbers[key] = numbers[key] * 2;
}
