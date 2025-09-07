/*                      31-9 Module Summary and Practice Problems */

// ======================== Practice Problem 3 ========================

/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements 
c) Return the average of the sum of the squared elements

Print the result.

We need an arrow function that:
1. Squares each element in the array
2. Sums those squared values
3. Divides by array length to get the average

// Arrow function
const averageOfSquares = (numbers) => {
  const squares = numbers.map(num => num * num); // Step a: square each element
  const sum = squares.reduce((acc, val) => acc + val, 0); // Step b: sum
  return sum / numbers.length; // Step c: average
};

// Example usage
const numbersArray = [2, 4, 6, 8, 10];
const result = averageOfSquares(numbersArray);

console.log(result);
// Output: 44
/* 
Walkthrough with [2, 4, 6, 8, 10]
    * Squares → [4, 16, 36, 64, 100]
    * Sum → 220
    * Average → 220 / 5 = 44
*/
// ================================================= //

//Simpler one-liner version without extra variables:

// Arrow function (simple one-liner)
const averageOfSquares = (numbers) => 
  numbers.reduce((sum, num) => sum + num * num, 0) / numbers.length;

// Example usage
const numbersArray = [2, 4, 6, 8, 10];
const result = averageOfSquares(numbersArray);

console.log(result);
/* 
Output:
44
*/
// ================================================= //

// Debug version that prints each squared element, the running sum, and the final average:

/*
// Arrow function with debug logs
const averageOfSquares = (numbers) => {
  let sum = 0;
  numbers.forEach(num => {
    const square = num * num;
    console.log(`${num} squared → ${square}`);
    sum += square;
    console.log(`Running sum → ${sum}`);
  });
  const average = sum / numbers.length;
  console.log(`Final average → ${average}`);
  return average;
};

// Example usage
const numbersArray = [2, 4, 6, 8, 10];
const result = averageOfSquares(numbersArray);

console.log("Returned Result:", result);

Output:
2 squared → 4
Running sum → 4
4 squared → 16
Running sum → 20
6 squared → 36
Running sum → 56
8 squared → 64
Running sum → 120
10 squared → 100
Running sum → 220
Final average → 44
Returned Result: 44
*/