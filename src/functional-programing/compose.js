/*
* ES6版本
*/
// const compose = (FunA, FunB) => (
//   arg => FunA( FunB(arg) )
// )
// const first = arr => arr[0]
// const reverse = arr => arr.reverse()
// const last = compose(first, reverse)
// const res = last([1,2,3])
// console.log(res)

/*
* ES5版本
*/
// function compose (FunA, FunB) {
//   return function actual (arg) {
//     return FunA(FunB(arg))
//   }
// }

// function getFirst (arr) {
//   return arr[0]
// }

// function reverse (arr) {
//   return arr.reverse()
// }

/*
* 调用compose，得到其第一个return的函数
*/
// const last = compose(getFirst, reverse)
// const res = last([1, 2, 3, 9, 5])
// console.log(res)

/*
* 另一个例子
*/
const compose = function (FuncA, FuncB) {
  return function (arg) {
    return FuncA(FuncB(arg))
  }
}

const toUpperCase = function (x) { return x.toUpperCase() }
const exclaim = function (x) { return `${x}!` }

const shout = compose(toUpperCase, exclaim)
const res = shout('functional programing is useful')
console.log(res)
