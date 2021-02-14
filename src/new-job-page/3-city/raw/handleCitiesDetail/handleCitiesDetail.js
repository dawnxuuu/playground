const fs = require('fs-extra')

const cityRelation = require('./cityRelation')
const cityBaseData = require('./cityBaseData')

// 将一组周边城市的cityId替换为城市详细信息
function getOneSetOfAroundCitiesDetail(cityCode) {
  if (!cityRelation[cityCode]) return false
  const recommendCityIds = cityRelation[cityCode]
  const items = cityBaseData.filter(item => recommendCityIds.indexOf(Number(item.code)) !== -1)
  return items
}

// 将全部周边城市替换为城市详细信息
const allAroundCitiesDetail = {}

Object.keys(cityRelation).forEach((key) => {
  if (allAroundCitiesDetail[key]) {
    console.log(key)
    return
  }

  allAroundCitiesDetail[key] = getOneSetOfAroundCitiesDetail(key)
})

fs.writeJSONSync(
  './src/new-job-page/3-city/raw/handleCitiesDetail/aroundCitiesDetail.json',
  allAroundCitiesDetail,
  { spaces: '\t', EOL: '\n' }
)
