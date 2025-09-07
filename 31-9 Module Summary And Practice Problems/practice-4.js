/*                      31-9 Module Summary and Practice Problems */

// ======================== Practice Problem 4 ========================

/*
Write an arrow function where it will do the followings:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result

Print the result.
*/

// Arrow function
const maxOfCombinedArrays = (arr1, arr2) => {
  const combined = [...arr1, ...arr2]; // Step b: combine arrays
  return Math.max(...combined);        // Step c: find max
};

// Example usage
const array1 = [5, 12, 8, 3];
const array2 = [15, 7, 20, 1];
const result = maxOfCombinedArrays(array1, array2);

console.log(result);
// Output: 20

/* 
✅ How it works:
1. '[...arr1, ...arr2]' creates a new array combining both input arrays.
2. 'Math.max(...combined)' finds the maximum value from the combined array.

✅ Why it’s simpler:
    * Combines arrays and finds max in one line.
    * No extra variable needed.
    * Very clean and modern syntax.
*/
// ================================================ //


/*
A version using '.concat()' instead of the spread operator

// Arrow function using concat
const maxOfCombinedArrays = (arr1, arr2) => {
  const combined = arr1.concat(arr2); // Combine the two arrays
  return Math.max(...combined);       // Find the maximum
};

// Example usage
const array1 = [5, 12, 8, 3];
const array2 = [15, 7, 20, 1];
const result = maxOfCombinedArrays(array1, array2);

console.log(result);
// Output: 20

✅ '.concat()' creates a new array combining 'arr1' and 'arr2', just like the spread operator.
*/
