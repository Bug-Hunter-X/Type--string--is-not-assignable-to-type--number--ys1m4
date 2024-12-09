function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

console.log(result1); // 8
console.log(result2); // 6

//This will throw an error because the function expect to get numbers but the user entered strings.
const result3 = add("5", "3"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const result4 = subtract(10, "4"); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.