const { exec, execSync } = require('child_process')

function output(childProcess, logPreFix) {
  let stderr = ''
  let stdout = ''

  childProcess.stderr.on('data', (chunk) => { stderr += chunk })
  childProcess.stderr.on('end', () => { if (stderr) console.log(`${logPreFix}stderr : `, `${stderr}`) })
  childProcess.stdout.on('data', (chunk) => { stdout += chunk })
  childProcess.stdout.on('end', () => { if (stdout) console.log(`${logPreFix}stdout : `, `${stdout}`) })

  childProcess.on('error', (error) => { console.log(`${logPreFix}发生错误`, error) })
}

// 等待多个异步程序并行执行结束
async function run1() {
  const task = new Promise((resolve) => {
    let count = 0
    const fruits = ['apple', 'banana', 'orange']

    fruits.forEach((item) => {
      const childProcess = exec(`echo ${item}`, { cwd: process.cwd(), stdio: 'pipe' })
      output(childProcess, '水果')
      childProcess.on('close', () => {
        count += 1
        if (count === fruits.length) resolve('结束')
      })
    })
  })

  const result = await task
  console.log(result)
}

// run1()

// 使用promise.all
async function run2() {
  const fruits = ['apple', 'banana', 'orange']

  const promises = fruits.map(async (item) => {
    const childProcess = execSync(`echo ${item}`, { cwd: process.cwd(), stdio: 'pipe' })
    return childProcess.toString()
  })

  const result = await Promise.all(promises)
  console.log(result)
}

// run2()

function run3() {
  Promise.all([
    new Promise((resolve, reject) => {
      resolve(1)
    }),
    new Promise((resolve, reject) => {
      resolve(2)
      // reject(new Error(2))
    })
  ])
    .then(result => console.log(result))
    .catch(e => console.log(e))
}

// run3()

// process.on('unhandledRejection', (reason, p) => {
//   console.log('Unhandled Rejection at:', p, 'reason:', reason);
// })

// 让异步变串行
function run4() {
  return new Promise((resolve) => {
    function task(fruits, index = 0) {
      const childProcess = exec(`echo ${fruits[index]}`, { cwd: process.cwd(), stdio: 'pipe' })
      output(childProcess, '水果')
      childProcess.on('close', () => {
        if (fruits[index + 1]) task(fruits, index + 1)
        else resolve('结束')
      })
    }

    task(['apple', 'banana', 'orange'], 0)
  })
}

run4()
  .then((result) => {
    console.log(result)
  })
