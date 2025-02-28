// Callback function
// là 1 function truyền vào function khác như 1 tham số

// const nums = [1, 2, 3, 4, 5]

// const callback = (item, index) => {
//   console.log(`STT ${index} la ${item}`)
// }

// nums.forEach(callback);

// Currying là function mà return về function

function findNumber(num) {
  return function (func) {
    const result = []
    for (let i = 0; i <= num; i++) {
      if (func(i)) {
        result.push(i)
      }
    }
    return result
  }
}

// cách gọn hơn là dùng arrow function
const findNumber1 = (num) => (func) => {
  const result = []
  for (let i = 0; i <= num; i++) {
    if (func(i)) {
      result.push(i)
    }
  }
  return result
}

//so chan tu 0-10
const value = findNumber(10)((number) => number % 2 === 0)
console.log(value)

//so le tu 0-10
const newFunc = findNumber(10)
const value2 = newFunc((number) => number % 2 === 1)

console.log(value2)
