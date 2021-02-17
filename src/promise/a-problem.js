const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

const ajax1 = () => timeout(3000).then(() => {
  console.log('1');
  return 1;
});
const ajax2 = () => timeout(2000).then(() => {
  console.log('2');
  return 2;
});
const ajax3 = () => timeout(1000).then(() => {
  console.log('3');
  return 3;
});

const mergePromise = (ajaxArray) => {
  // 解法1
  // async function helper (arrFn) {
  //   const promises = [];
  //   for (const fn of arrFn) {
  //     promises.push(await fn());
  //   }
  //   console.log('promises', promises)
  //   return Promise.all(promises);
  // }
  // return helper(ajaxArray);

  // 解法2
  // async function helper (arrFn) {
  //   const res = []
  //   let i = 0
  //   while (i < arrFn.length) {
  //     res.push(await arrFn[i]())
  //     i++
  //   }
  //   return Promise.resolve(res)
  // }
  // return helper(ajaxArray)

  // 解法3
  // return new Promise((resolve, reject) => {
  //   function next(res = []) {
  //     if (Array.isArray(ajaxArray) && ajaxArray.length > 0) {
  //       const fn = ajaxArray.shift()
  //       if (typeof fn === 'function') {
  //         fn().then((data) => {
  //           res.push(data)
  //           next(res)
  //         }).catch((err) => {
  //           reject(err)
  //         })
  //       }
  //     } else {
  //       resolve(res)
  //     }
  //   }
  //   next([])
  // })

};

debugger
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data);
  // 题目：完成mergePromise函数，要求输出：1 2 3 done [1,2,3]。
  // 思路：核心就是把ajax1, ajax2, ajax3同步依次执行，并拿到每个的返回结果，再返回一个Promise实例
});