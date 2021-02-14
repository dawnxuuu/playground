const person = [['A', 'B'], ['C', 'D'], ['E', 'F']]

// 串（串）
function syncSync() {
  for (let i = 0; i < person.length; i += 1) {
    for (let j = 0; j < person[i].length; j += 1) {
      console.log(person[i][j])
    }
  }
}

// syncSync()

// 串（并）
function syncAsync() {
  for (let i = 0; i < person.length; i += 1) {
    const promises = person[i].map(async (item) => {
      setTimeout(() => {
        console.log('item(syncAsync) :', item)
      }, i * 500)
    })

    Promise.all(promises)
  }
}

// syncAsync()

// 并（并）
function asyncAsync() {
  person.forEach((item, index) => {
    setTimeout(() => {
      console.log('item(asyncAsync) :', item)

      item.forEach((item2, index2) => {
        setTimeout(() => {
          console.log('item2(asyncAsync) :', item2)
        }, index2 * 500);
      })
    }, index * 500);
  })
}

// asyncAsync()

// 并（串）
function asyncSync() {
  person.forEach((item, index) => {
    setTimeout(() => {
      for (let i = 0; i < item.length; i += 1) {
        console.log('asyncSync :', item[i]);
      }
    }, index * 500);
  })
}

asyncSync()
