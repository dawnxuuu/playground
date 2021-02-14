const allJobTypes = require('./hot-job-types')

function getRandoms(rangeMin, rangeMax, number) {
  const randoms = []

  function run(min, max, count) {
    if (randoms.length === count) return
    const item = Math.floor(Math.random() * (max - min + 1) + min)
    if (randoms.indexOf(item) === -1) randoms.push(item)
    run(min, max, count)
  }
  run(rangeMin, rangeMax, number)

  return randoms
}

function get12(jobType) {
  const similar = allJobTypes[jobType]
  const count = similar.length < 12 ? similar.length : 12
  const randoms = getRandoms(0, similar.length - 1, count)
  return randoms.map(item => similar[item])
}

function transUiData(jobType) {
  const raw = get12(jobType)
  const hotJobTypes = raw.map((item) => {
    const oneHotJobType = {
      text: `${item[1]}招聘`,
      url: `//jobs.zhaopin.com/hot_${item[2]}`
    }
    return oneHotJobType
  })

  return ['招聘热门职位', hotJobTypes]
}

const r = transUiData('304')

console.log(r)
