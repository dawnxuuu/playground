const fs = require('fs-extra')
const cities = require('./cities')

// 替换城市对应的跳转url
function trans(citiesArray) {
  const res = citiesArray.map((item) => {
    item.url = `//jobs.zhaopin.com/${item.pinyin}/`
    return item
  })

  fs.writeJSONSync('./src/new-job-page/3-city/raw/handleCitiesUrl/cities-new.json', res, { spaces: '\t', EOL: '\n' })
}

trans(cities)
