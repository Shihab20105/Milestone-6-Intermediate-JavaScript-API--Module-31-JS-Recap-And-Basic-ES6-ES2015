/*                      31-3 Function default parameter for not provided values */

/* 
function add(first, second){
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);
// Output: 30 
*/

/*
function add(first, second){
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);
// Output: NaN
*/


/*
function add(first, second){
    const total = first + second;
    return total;
}

const result = add();
console.log(result);
//Output: NaN
*/

/*
function add(first, second){
    console.log(first, second);
    const total = first + second;
    return total;
}

const result = add();
console.log(result);


Output: undefined undefined
NaN
*/


/*
function add(first, second){
    console.log(first, second);
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

Output: 10 undefined
NaN
*/


/*
function add(first, second){
    console.log(first, second);
    if(second === undefined){
        second = 0;
    }
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

Output: 10 undefined
10
*/


/*
function add(first, second){
    console.log(first, second);
    second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

Output: 10 undefined
10
*/


/*
function add(first, second){
    console.log(first, second);
    second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);
*/


/*
function add(first, second = 0){
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);
// Output: 30
*/


/*
function add(first, second = 0){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);
// Output: 10
*/


/*
function add(first, second = 36){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);
// Output: 46
*/



/*
function add(first, second = 36){
    const total = first + second;
    return total;
}
const result = add(10, 0);
console.log(result);
// Output: 10
*/


/*
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);
// Output: 10
*/



/*
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add();
console.log(result);
// Output: 0
*/


/*
function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add();
console.log(result);

function fullName(first, last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Hasan');
console.log(name);

Output: 0
Hasan Chowdhury
*/



function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
const result = add();
console.log(result);

function fullName(first, last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Hasan');
console.log(name);

/* 
A function default parameter means giving a parameter a value in advance, so if no value is passed when the function is called, it will automatically use that default value.

In short: Default parameters provide a fallback value when no argument is passed.
*/