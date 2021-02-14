const { setEnv, get } = require('@zpfe/utils-base-data')

setEnv('LOCAL')

async function fetched() {
  const result = await get('region_relation')
  console.log(result)
}

fetched()
