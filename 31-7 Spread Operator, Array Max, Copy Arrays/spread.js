/*                      31-7 Spread operator, array max, copy arrays */
/*
const max = Math.max(12, 85, 999, 78);
console.log(max);
// Output: 999
*/

/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(numbers);
console.log(largest);
// Output: NaN
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(numbers);
console.log(numbers);
console.log(largest);
Output:
[ 12, 85, 999, 78 ]
NaN
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(numbers);
console.log(...numbers);
console.log(largest);
Output:
12 85 999 78
NaN
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
console.log(...numbers);
console.log(largest);
Output:
12 85 999 78
999
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
console.log(numbers);
console.log(numbers2);
Output:
[ 12, 85, 999, 78 ]
[ 12, 85, 999, 78 ]
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
numbers.push(55);
console.log(numbers);
console.log(numbers2);
Output:
[ 12, 85, 999, 78, 55 ]
[ 12, 85, 999, 78, 55 ]
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
Output:
[ 12, 85, 999, 78, 55, 7777 ]
[ 12, 85, 999, 78, 55, 7777 ]
 */


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
Output:
[ 12, 85, 999, 78, 55 ]
[ [ 12, 85, 999, 78, 55 ], 7777 ]
*/


/*
const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
Output:
[ 12, 85, 999, 78, 55 ]
[ 12, 85, 999, 78, 7777 ]
*/



const max = Math.max(12, 85, 999, 78);
//console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

<<<<<<< HEAD

=======
>>>>>>> 957a1212da6448fc769d98fb22129602e0ab6c1a
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111, 33];