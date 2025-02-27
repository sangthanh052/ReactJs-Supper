# Destructuring & Rest Parameter & Spread Syntax

## Destructuring 
Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables. It allows for more readable and concise code. Here's a breakdown of how destructuring works and its common uses:

### Destructuring với object

```js
const user = {
  name: 'Duoc',
  age: 24,
  sex: 'male'
}
// Thay vì viết dài dòng như thế này
// const name = user.name
// const age = user.age
// const sex = user.sex
// Dùng Destructuring làm code ngắn gọn hơn nhiều
const { name, age, sex } = user
console.log(name) // Duoc
console.log(age) // 24
console.log(sex) // male
```

### Destructuring với array

```js
const list = [
  1,
  function (a, b) {
    return a + b
  }
]
const [value, func] = list
func(1, 2) // 3
```

## Spread Syntax
Spread syntax in JavaScript is a powerful feature that allows you to expand or "spread" elements of an iterable (like arrays or objects) into a new context. Here are some common uses of spread syntax:

```js
const user = {
  name: 'Duoc',
  age: 24,
  ability: ['coding']
}
// shallow copy
const cloneUser = { ...user }
```

## Rest Parameter

```js
const handle = (a, b, ...c) => {
  return c
}
handle(1, 2, 3, 4, 5, 6) // [3,4,5,6]
```

Kết hợp rest parameter với destructuring

```js
const handle = ({ a, b, ...c }) => {
  return c
}
handle({ a: 1, b: 2, c: 3, d: 4, e: 5 }) // {c: 3, d: 4, e: 5}
```

## reduce là một phương thức trong JavaScript

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 10

const fruits = ['apple', 'banana', 'orange'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount); // Kết quả: { apple: 1, banana: 1, orange: 1 }