# Destructuring & Rest Parameter & Spread Syntax

## Destructuring 
Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables. It allows for more readable and concise code. Here's a breakdown of how destructuring works and its common uses:

Destructuring trong JavaScript là một cú pháp cho phép bạn trích xuất các giá trị từ mảng hoặc đối tượng vào các biến riêng biệt một cách dễ dàng và ngắn gọn. Điều này giúp code trở nên sạch sẽ và dễ đọc hơn. Ví dụ, với mảng, bạn có thể viết const [a, b] = [1, 2] để gán a = 1 và b = 2. Với đối tượng, bạn có thể dùng const {name, age} = person để lấy các thuộc tính name và age từ đối tượng person. Destructuring cũng hỗ trợ giá trị mặc định và alias cho tên biến, giúp xử lý các trường hợp thiếu dữ liệu hoặc xung đột tên. Nó thường được sử dụng trong việc xử lý tham số hàm, import module, và làm việc với dữ liệu phức tạp.

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
Spread syntax in JavaScript is a powerful feature that allows you to expand or "spread" elements of an iterable (like arrays or objects) into a new context.
Đây là một tính năng được giới thiệu từ ES6, cho phép mở rộng các phần tử của một iterable (như mảng, object) vào nơi mà các phần tử hoặc cặp key-value được mong đợi. 
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
 Dùng để gom nhóm phần tử thừa (thường trong hàm):

```js
const handle = (a, b, ...c) => {
  return c
}
handle(1, 2, 3, 4, 5, 6) // [3,4,5,6]
```
Spread dùng để phân rã, Rest dùng để tập hợp. Ngoài ra, cần chỉ rõ ngữ cảnh sử dụng của từng loại. Ví dụ Spread thường dùng trong biểu thức, còn Rest dùng trong khai báo hàm hoặc destructuring.
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