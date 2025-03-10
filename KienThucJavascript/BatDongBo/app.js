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
 * Async / Await ES6 mới có 
 * * await chỉ sử dụng được trong một async function, await phải nằm trong async
 * * Chỉ sử dụng await với promise
 */

const pFunc2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Loiiiii')
    }, 0)
  })


const handle = async () => {
  try {
    const value = await pFunc2()
    console.log(value)
  } catch (error) {
    console.warn(error)
  } finally {
    console.log('Finally')
  }
}

// dùng await nhưng ko muốn khai báo hàm mới ta dùng hàm ẩn danh ;(code)(), dùng ; để tránh một số lỗi ko đáng có
;(async () => {
  try {
    const value = await pFunc2()
    console.log(value)
  } catch (error) {
    console.warn(error)
  } finally {
    console.log('Finally')
  }
})()

// muốn bắt lỗi promise thì dùng .catch (vì try catch chỉ bắt lỗi những câu lệnh đồng bộ), còn async/await thì dùng try, catch