const spiderService = require('../../../services/admin/spider-service')

async function test() {
  let data = await spiderService.getSpiderInfo()
  //console.log('@@@data: ', data)
}
test()