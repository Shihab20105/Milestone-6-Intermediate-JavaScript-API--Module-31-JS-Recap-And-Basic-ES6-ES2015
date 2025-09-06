/*                  31-4 Template string, multiple line string, dynamic string */

/*
const person = 'Khalid Bin Walid'; 
const person2 = "Ertrogrul";
const person3 = `Osman`;

const multiLine = 'First line text' +
'Second line of code' +
'Third line of text' +
'Fourth line of string';
console.log(multiLine);
// Output: First line textSecond line of codeThird line of textFourth line of string
*/


const multiLine = 'First line text \n' +
'Second line of code \n' +
'Third line of text \n' +      // '\n' means in new line
'Fourth line of string';
//console.log(multiLine);
// Output: 
// First line text 
// Second line of code
// Third line of text
// Fourth line of string




const newMultiLine = `First line of text
Second line of text
Third line of string
Fourth line of code`;
//console.log(newMultiLine);
// Output:
// First line of text
// Second line of text
// Third line of string
// Fourth line of code


/*
const a = 20;
const b = 30;
const summary = 'sum of:' + a + 'and' + b + 'is:'+ (a+b);
console.log(summary);
// Output: sum of:20and30is:50
*/


/*
const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
//console.log(summary);
// Output: sum of: 20 and 30 is: 50


const newSummary = `Sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);
// Output: Sum of 20 and 30 is: 50
*/


/*
const a = 20;
const b = 30;
const numbers = [78, 98, 45, 12, 6, 444];
//const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
//console.log(summary);
// Output: sum of: 20 and 30 is: 50


const newSummary = `Sum of ${a} and ${numbers.length} is: ${a+b}`;
console.log(newSummary);
// Output: Sum of 20 and 6 is: 50
*/


const a = 20;
const b = 30;
const numbers = [78, 98, 45, 12, 6, 444];
//const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
//console.log(summary);
// Output: sum of: 20 and 30 is: 50


const newSummary = `Sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);

// Output: Sum of 20 and 30 is: 50