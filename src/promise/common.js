function creatPromise(params) {
  return new Promise(((resolve, reject) => {
    if (params % 2 === 0) resolve(`传入偶数${params}`)
    else reject(Error(`传入奇数${params}`))
  }))
}

// 写在同一个then里
// creatPromise(2).then(
//   (value) => {
//     console.log('成功', value)
//   },
//   (error) => {
//     console.log('失败', error)
//   }
// )

// creatPromise(21)
//   .then((value) => {
//     console.log('成功', value)
//   })
//   .catch((error) => {
//     console.log('失败', error)
//   })
//   .then((value) => {
//     console.log('未知成功', value)
//   }, (error) => {
//     console.log('未知失败', error)
//   })

// Promise.resolve(42)
//   .then((value) => {
//     console.log(`resolve后then中第一个函数${value}`)
//   }, (value) => {
//     console.log(`resolve后then中第二个函数${value}`)
//   })

Promise.reject(Error('失败'))
  .then((value) => {
    console.log(`reject后then中第一个函数${value}`)
  }, (value) => {
    console.log(`reject后then中第二个函数${value}`)
  })
  .then((value) => {
    console.log(`新Promise对象then中第一个函数${value}`)
  }, (value) => {
    console.log(`新Promise对象then中第二个函数${value}`)
  })
