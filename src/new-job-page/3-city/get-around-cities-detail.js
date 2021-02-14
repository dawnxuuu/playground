const aroundCitiesDetail = require('./around-cities-detail')

function getAroundCitiesDetail(cityId) {
  return ['周边城市', aroundCitiesDetail[cityId]]
}

console.log(getAroundCitiesDetail('530'))
