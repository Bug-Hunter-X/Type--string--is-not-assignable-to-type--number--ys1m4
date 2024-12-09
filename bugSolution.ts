function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: Both arguments must be numbers.");
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: Both arguments must be numbers.");
  }
  return numA - numB;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6

//Safe functions
const result3 = addSafe("5", "3"); // 8
const result4 = subtractSafe(10, "4"); // 6
const result5 = addSafe("hello", 5); //Throws Error

console.log(result1); // 8
console.log(result2); // 6
console.log(result3); // 8
console.log(result4); // 6