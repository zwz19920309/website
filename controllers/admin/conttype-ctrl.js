
const HttpResult = require('../../common/http/http-result')
const conttypeService = require('../../services/admin/conttype-service')

// 获取解析的信息
const getContTypeList = async (ctx) => {
  let conttypeList = await conttypeService.getContTypeList({})
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: conttypeList, total: conttypeList.length }, 'SUCCESS')
}

module.exports = {
  getContTypeList
}
