const HttpResult = require('../../common/http/http-result')
const pageService = require('../../services/admin/page-service')
const spiderService = require('../../services/admin/spider-service')

// 爬虫
const getSpiderInfo = async (ctx) => {
  let { id } = ctx.request.body
  let page = await pageService.findPageNewById({ id: id })
  let info = await spiderService.getSpiderInfo({ id: id })
  let obj = JSON.parse(info)
  let data = obj.data
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: data, total: data.length, page: page }, 'SUCCESS')
}

module.exports = {
  getSpiderInfo
}
