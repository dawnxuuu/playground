const fs = require('fs-extra')

const allJobTypes = require('./baseData-new')
const jobNameBaseData = require('./job-type')

const newAllJobTypes = {}

Object.keys(allJobTypes).forEach((key) => {
  const aSetOfRecommend = allJobTypes[key]
  const aSetOfRecommendNames = []

  aSetOfRecommend.forEach((item) => {
    const jobId = item[0]

    let jobName = null

    jobNameBaseData.forEach((ele) => {
      ele.subs.forEach((ele2, index2) => {
        if (ele2.code === jobId) {
          jobName = ele.subs[index2].cnName
        }
      })
    })

    if (jobName !== null && jobName !== '其他') {
      aSetOfRecommendNames.push([jobId, jobName])
    }
  })

  newAllJobTypes[key] = aSetOfRecommendNames
})

fs.writeJSONSync(
  './src/new-job-page/1-city+job/raw/handle-recommend-job-name/recommend-jobs.json',
  newAllJobTypes
)
