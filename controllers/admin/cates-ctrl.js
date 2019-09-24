
const HttpResult = require('../../common/http/http-result')
const catessService = require('../../services/admin/cates-service')

// 获取解析的信息
const getCatesList = async (ctx) => {
  let catesList = await catessService.getCatesList({})
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: catesList, total: catesList.length }, 'SUCCESS')
}

module.exports = {
  getCatesList
}
