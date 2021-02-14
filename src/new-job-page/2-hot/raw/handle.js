const fs = require('fs-extra')

const baseDataString = require('./baseData')

const baseDataArray = baseDataString.split('\n')

const baseDataBeautiful = baseDataArray.map((item) => {
  const itemArray = item.split(',')
  if (itemArray[itemArray.length - 1] === '') {
    itemArray.pop()
  }
  return itemArray
})

const baseDataTree = {}

baseDataBeautiful.forEach((item) => {
  const key = item[0]
  if (baseDataTree[key]) {
    item.shift()
    baseDataTree[key].push(item)
  } else {
    baseDataTree[key] = []
    item.shift()
    baseDataTree[key].push(item)
  }
})

fs.writeJSONSync('./src/new-job-page/2-hot/hot.json', baseDataTree)
