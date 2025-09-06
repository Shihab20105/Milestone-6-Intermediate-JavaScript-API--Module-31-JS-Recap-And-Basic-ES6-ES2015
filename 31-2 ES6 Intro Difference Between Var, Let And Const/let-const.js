/*                      31-2 ES6 Intro difference between var, Let and const */


// Breakup with 'var'
// No more use of 'var'
// 'let': 'let' it to reassign
// 'const': Do not allow it to reassign

/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
bird = 'Wood pigeon';
console.log(bird);

Output: 
bird = 'Wood pigeon';
     ^

TypeError: Assignment to constant variable.
*/


/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
console.log(bird);

Output: 35
House sparrow
*/


/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);
 
Output: 35
House sparrow The house sparrow is a bird of the sparrow family Passeridae
*/


/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
numbers = [77, 66, 55, 22, 99];

Output: numbers = [77, 66, 55, 22, 99];
        ^

TypeError: Assignment to constant variable.
*/


/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
console.log(numbers);

Output: 35
House sparrow The house sparrow is a bird of the sparrow family Passeridae
[ 12, 89, 65, 45, 123 ]
*/

/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

Output: 35
House sparrow The house sparrow is a bird of the sparrow family Passeridae
[ 12, 90, 65, 45, 123 ]
*/

/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Hasan',
    address: 'Sylhet',
}
//student = {name: 'Hasan Ahmed'} //Its not Allowed
student.name = 'Hasan Ahmed';

//for(const number of numbers)
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

Output: 35
House sparrow The house sparrow is a bird of the sparrow family Passeridae
[ 12, 90, 65, 45, 123 ]
12
90
65
45
123
*/


/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Hasan',
    address: 'Sylhet',
}
//student = {name: 'Hasan Ahmed'} //Its not Allowed
student.name = 'Hasan Ahmed';

//for(const number of numbers)
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
console.log(number);

Output: console.log(number);
            ^

ReferenceError: number is not defined
*/



/*
let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Hasan',
    address: 'Sylhet',
}
//student = {name: 'Hasan Ahmed'} //Its not Allowed
student.name = 'Hasan Ahmed';

//for(const number of numbers)
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);

Output: 35
House sparrow The house sparrow is a bird of the sparrow family Passeridae
[ 12, 90, 65, 45, 123 ]
123
*/



let money = 25;
money = 35;
console.log(money); 
// Output: 35

const bird = 'House sparrow';
//bird = 'Wood pigeon';
const message = bird + ' The house sparrow is a bird of the sparrow family Passeridae';
console.log(message);

const numbers = [12, 89, 65, 45];
//reassign not allowed 
//numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Hasan',
    address: 'Sylhet',
}
//student = {name: 'Hasan Ahmed'} //Its not Allowed
student.name = 'Hasan Ahmed';

//for(const number of numbers)
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);