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

async function run4() {
  const [{ a: t }, s] = await Promise.all([
    new Promise((resolve, reject) => {
      resolve({ a: { b: 1 } })
    }),
    new Promise((resolve, reject) => {
      resolve({ b: 2 })
      // reject(new Error(2))
    })
  ])

  console.log(t)
  console.log(s)
}

run4()
