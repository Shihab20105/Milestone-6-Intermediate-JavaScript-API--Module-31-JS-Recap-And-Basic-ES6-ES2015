/*                  31-5 Arrow function, multiple parameter, function body */

/* 
// Function declaration 
function add(first, second){
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);
// 30 
*/


/* 
function add(first, second){
    const total = first + second;
    return total;
}

 
// document.getElementById('btn-add').onclick = function addBG(){

// }


const result = add(10, 20);
console.log(result); 
*/



/*
 function add(first, second){
    const total = first + second;
    return total;
} 
*/


/*
const number = 56;

// Function expression  
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// Function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}


function add(first, second){
    const total = first + second;
    return total;
}

function add4(first, second){
    return first + second;
}

const result = add(10, 20);
console.log(result);
*/



const number = 56;

// Function expression  
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// Function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}


function add4(first, second){
    return first + second;
}

const add5 = function(first, second){
    return first + second;
}

// Arrow function
const add6 = (first, second) => first + second;

const result = add6(10, 20);
console.log(result);
// Output: 30

// Interview question: Differences between function declaration, function expression  and arrow function?

/* 
1. Function Declaration
function add(a, b) {
  return a + b;
}


* Normal way of writing a function.
* Hoisted → you can use it before it’s written.

2. Function Expression
const add = function(a, b) {
  return a + b;
};


* Function stored in a variable.
* Not hoisted → you can only use it after it’s written.

3. Arrow Function
const add = (a, b) => a + b;

* Short, modern syntax.
* Not hoisted.
* Doesn’t have its own 'this' (uses 'this' from outside).

✅ In short:

* Declaration → old style, hoisted.
* Expression → stored in variable, not hoisted.
* Arrow → shorter, no own 'this', not hoisted.
*/


