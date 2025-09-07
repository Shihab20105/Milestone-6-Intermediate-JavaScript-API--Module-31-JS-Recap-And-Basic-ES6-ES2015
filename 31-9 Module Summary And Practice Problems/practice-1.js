/*                      31-9 Module Summary and Practice Problems */
 
// ======================== Practice Problem 1 =======================

/*
1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
*/

//(with a single expression)
//it’s just one expression, the result is returned automatically (no need to write 'return').
const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(2, 3, 4));
console.log(multiplyThree(5, 1, 10));
/* 
Output:
24
50
*/
// ===================================== //

//(with multiple statements in the body)
//If you need more than one line of code inside the function, you use curly braces '{}' and explicitly write 'return':
/*
const multiplyThree = (a, b, c) => {
  const result = a * b * c;
  return result;
};

console.log(multiplyThree(5, 2, 1)); 

Output: 10
*/
// ======================================================================================= //

/*
2. Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biriyani.
*/

//Use backticks ( ` ` ) in JavaScript to create template literals.
//Template literals let you write multi-line strings more easily, without needing '\n'.
const sentence = `I am a web developer.
I love to code.
I love to eat biriyani.`;

console.log(sentence);
/* 

Output:
I am a web developer.
I love to code.
I love to eat biriyani.
*/
// =============================================== //

// Use '\n' (newline character) inside a string to print text on separate lines.
/*
const sentence = "I am a web developer.\nI love to code.\nI love to eat biriyani.";
console.log(sentence);

Output:
I am a web developer.
I love to code.
I love to eat biriyani.
*/
// ====================================================================================== //


/*
3. Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result. 
*/
// Use default parameters in arrow functions easily.

// Arrow function with one default parameter
const addNumbers = (a, b = 10) => a + b;

// Calling the function
console.log(addNumbers(5));     // 15  (5 + default 10)
console.log(addNumbers(7, 3));  // 10  (7 + 3)
/* 
Output:
15
10
*/
 
// *) 'a' → will always come from you (the caller).
// *) 'b = 10' → has a default value of '10'. If you don’t pass 'b', it will automatically take '10'.
// =============================================== //

/*
const add = (first, second = 36) => {
    const total = first + second;
    return total;
};

const result = add(10);
console.log(result); 
// Output: 46

* Here, because we used '{}', we must write return.
    * No curly braces → return is automatic.
    * With curly braces → you must write 'return'.
*/
// ================================================ //



//even shorter (since it’s a one-liner):
const add = (first, second = 36) => first + second;

console.log(add(10)); 
// Output: 46



