/*                      31-8 (advanced) Object and Array Destructuring */

/*
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
*/


/*
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);

const {address} = fish;
console.log(address);
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
Chandpur
*/


/*
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring 
const[first, another] = [44, 99];
console.log(first, another);
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
Chandpur
44 99
*/


/*
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring 
const[first, another] = [44, 99, 88, 456];
console.log(first, another);
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
Chandpur
44 99
*/



/*
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring 
const[first, another] = [44, 99, 88, 456];
console.log(first, another);


const actors = ['Salman Shah', 'Manna', 'Razzak'];
const [Joshim, BappaRaj, Siam] = actors;
console.log(Siam);
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
Chandpur
44 99
Razzak
*/



const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
const {phone} = fish;
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age, name} = {name: 'Mahmudur', age: 56, profession: 'Journalist'};
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring 
const[first, another] = [44, 99, 88, 456];
console.log(first, another);


const actors = ['Salman Shah', 'Manna', 'Razzak'];
const [Joshim, BappaRaj, Siam] = actors;
console.log(Siam);


function getNames(){
    return ['Alim', 'Halim'];
}

const[baba, chacha] = getNames();
console.log(chacha, baba);

/* 
Output:
017176588899
017176588899
017176588899
017176588899
017176588899
56
Chandpur
44 99
Razzak
Halim Alim
*/