// setTimeout(() => {
//   console.log('Hello')
// }, 0)

// console.log('I Am Alex')

// const pFunc = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Hello')
//     }, 0)
//   })

const pFunc = () => new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("Thành công!"); // → .then() sẽ được gọi
    } else {
      reject("Thất bại!");    // → .catch() sẽ được gọi
    }
  }, 0);
})

// const value = pFunc()
//   .then((val) => {
//     console.log(val)
//     return 100
//   })
//   .catch((error) => {
//     console.warn(error)
//     return -100
//   })

// value.then((value) => {
//   console.log(value)
// })
// console.log('value', value)

/**
 * Async / Await
 * * await chỉ sử dụng được trong một async function
 * * Chỉ sử dụng await với promise
 */

const pFunc2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Loiiiii')
    }, 0)
  })

;(async () => {
  try {
    const value = await pFunc2()
    console.log(value)
  } catch (error) {
    console.warn(error)
  // } finally {
  //   console.log('Finally')
  }
})()
