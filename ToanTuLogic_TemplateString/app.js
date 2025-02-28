const a = true
const b = undefined
const c = 'Hi'

const d = a && b && c // ''

console.log('d', d)

let check = 10
const handle = () => {
  return [1, 2, 3].map((item) => item *2)
}
let value = []
// if (check > 9) {
//   value = handle()
// }
value = check > 9 && handle()
console.log(value)

// mở rộng
const handle1 = () => {
  return [1, 2, 3].map((item, index) => item * index)
}

let value1 = []
// if (check > 9) {
//   value = handle()
// }
value1 = check > 9 && handle1()

console.log('handle1: ', value1)

// let fname = 'alex'

// fname === 'alex' ? console.log('true') : console.log(false)

// let user = {}
// alert(user?.adress?.street) // undefined

let user = 0
let value3 = user ?? 'Hello3'
// `??` khác với `||` là `||` nó check theo falsy, bao gồm `0` hay `''`, `NaN`
// null, undefined, 0, '', NaN, 0n
let value4 = user || 'Hello4'

console.log('value3:'+value3, 'value4:' +value4)

// let a = `string text`

// const sum = (a, b) => a + b

// // let c = 'string text ' + a + ' string text'

// let c = `string text ${sum(1, 2)} string text`
// console.log(c)
