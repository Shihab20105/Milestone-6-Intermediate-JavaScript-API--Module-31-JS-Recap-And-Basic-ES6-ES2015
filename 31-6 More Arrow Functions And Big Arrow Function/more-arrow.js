/*                      31-6 More Arrow functions and big arrow function */

const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
//console.log(result);
// Output: 56

const addALL = (a, b, c, d, e, f) => a + b + c + d + e + f;

// No parameter arrow function 
const getPie = () => 3.14

// One parameter
const doubleIt = (num) => num * 2;

// One parameter simple version
const fiveTimes = num => num * 5;

// Multi line arrow function
// If you want to return something, use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}

// ======================================================================================= //

/*
The differences between arrow functions '(()=>{})' and regular functions '(function(){})' in JavaScript:

🔑 1. Syntax

* Regular function:

function add(a, b) {
  return a + b;
}

* Arrow function:

const add = (a, b) => a + b;

Arrow functions are shorter and often cleaner.

🔑 2. 'this' Binding

* Regular function:
Has its own 'this' (depends on how the function is called).

const obj = {
  name: "JS",
  regular: function() {
    console.log(this.name);
  }
};
obj.regular(); // "JS"

* Arrow function:
Does not have its own 'this'. It uses the 'this' from its surrounding scope (lexical scoping).

const obj = {
  name: "JS",
  arrow: () => {
    console.log(this.name);
  }
};
obj.arrow(); // undefined (or window.name in browsers)

🔑 3. Arguments Object

* Regular function: has its own 'arguments' object.

function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3); // [1, 2, 3]

* Arrow function: does not have 'arguments'.
You’d use rest parameters instead:

const showArgs = (...args) => {
  console.log(args);
};
showArgs(1, 2, 3); // [1, 2, 3]

🔑 4. Constructor Usage

* Regular function: can be used as a constructor with 'new'.

function Person(name) {
  this.name = name;
}
const p = new Person("John"); // works

* Arrow function: cannot be used as a constructor.

const Person = (name) => {
  this.name = name;
};
const p = new Person("John"); // ❌ Error

🔑 5. Hoisting

* Regular functions are hoisted (you can call them before they’re defined).

greet(); // works
function greet() {
  console.log("Hello");
}

* Arrow functions (if defined with 'const'/'let') are not hoisted.

greet(); // ❌ Error
const greet = () => console.log("Hello");


✅ Summary Table:

Feature:	                  Regular Function:	        Arrow Function:
   
Syntax	 --------------------- Verbose	         ---------- Concise
this	 --------------------- Own binding	     ---------- Lexical (inherits)
arguments	------------------ Available	    ----------- Not available
new (constructor)------------- Allowed	     -------------- ❌ Not allowed
Hoisting	------------------ Yes	          ------------- No (if const/let)
*/