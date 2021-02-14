const callbacks = {}
let id = 0

function cb(r) {
  console.log('回调执行', r)
}

const promise = new Promise(((resolve) => {
  id += 1
  console.log('inner promise');
  callbacks[id] = (res) => { resolve(res) }
}))

promise.then(value => cb(value))

// 模拟native调用
callbacks[1]('ss')

async function s() {
  console.log(await promise)
}
s()

promise.then((res) => {
  console.log(res)
})
