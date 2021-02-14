const fs = require('fs-extra')

const baseDataString = require('./baseData')

const baseDataArray = baseDataString.split('{$}')

const baseDataBeautiful = baseDataArray.map(item => item.split('|'))

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

fs.writeJSONSync(
  './src/new-job-page/1-city+job/raw/handle-raw-txt/baseData-new.json',
  baseDataTree,
  { EOL: '\n' }
)
