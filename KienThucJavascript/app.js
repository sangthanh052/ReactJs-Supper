/**
 * Destructuring
 */

//Destructuring with object
const user = {
    name: 'sang',
    age: 30,
    sex: 'male'
}

// const name = user.name,
//     age = user.age,
//     sex = user.sex;
const {age, name, sex} = user;
// console.log(name, age, sex);

function greet({ name, age, sex }) {
    // console.log(`Hello, ${name}. You are ${age} years old. ${sex}`);
  }
  
  greet(user);   

const response = {
    name: 'sang',
    age: 30,
    address: {
        city: 'ho chi minh',
        country: 'vietnam'
    }
}


const {name: username, age: userage, address: {city: usercity, country: usercountry} } =  response;
// console.log(`name ${username}, age ${userage}, city ${usercity}, country ${usercountry}`);

// Destructuring with array
const list = [
    1,
    function (a, b) {
        return a + b;
    }
]

const [value, usesum] = list;
// console.log(value, sum(1, 2))

/**
 * Spread Syntax
 * Spread syntax in JavaScript is a powerful feature that allows you to expand or "spread" elements of an iterable (like arrays or objects) into a new context
 **/
// sao chép mảng
const arr1 = [1, 2, 3];
const arr2 = [0,...arr1, 5];
// console.log(arr2);

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log('sum=', sum(1, 2, 3, 4, 5)); // Outputs: 10

const handle = ({ a, b, ...c }) => {
    return c
}

const values = handle({ a: 1, b: 6, c: 3, d: 4, e: 5 }) // {c: 3, d: 4, e: 5}
 
console.log(values);