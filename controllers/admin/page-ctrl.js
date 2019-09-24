
const HttpResult = require('../../common/http/http-result')
const pageService = require('../../services/admin/page-service')

// 添加page
const addPageNew = async (ctx) => {
  let { pagesite, realsite, sitemd5, pagetitle, status, deltatime, channel, headers, cates, followlink, ctype, link_unique_by, encoding, linkrule,
    titlerule, contentrule, priority, foreign, group, extra } = ctx.request.body
  let catesList = await pageService.addPageNew({
    pagesite: pagesite,
    realsite: realsite,
    sitemd5: sitemd5,
    pagetitle: pagetitle,
    status: status,
    deltatime: deltatime,
    channel: channel,
    headers: headers,
    cates: cates,
    followlink: followlink,
    ctype: ctype,
    link_unique_by: link_unique_by,
    encoding: encoding,
    linkrule: linkrule,
    titlerule: titlerule,
    contentrule: contentrule,
    priority: priority,
    foreign: foreign,
    group: group,
    extra: extra
  })
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: catesList, total: catesList.length }, 'SUCCESS')
}

// 获取pageList
const getPageList = async (ctx) => {
  let data = await pageService.getPageList({ page: 1, pageSize: 10 })
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, { list: data.rows, total: data.total }, 'SUCCESS')
}

// 删除网页
const deletePageNew = async (ctx) => {
  let { id } = ctx.request.body
  let data = await pageService.deletePageNew({ id: id })
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, data, 'SUCCESS')
}

// 根据idh获取page网页
const findPageNewById = async (ctx) => {
  let { id } = ctx.request.body
  let data = await pageService.findPageNewById({ id: id })
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, data, 'SUCCESS')
}

// 修改网页
const editPageNew = async (ctx) => {
  let { pagesite, realsite, sitemd5, pagetitle, status, deltatime, channel, headers, cates, followlink, ctype, link_unique_by, encoding, linkrule,
    titlerule, contentrule, priority, foreign, group, extra, id } = ctx.request.body
  let page = await pageService.findPageNewById({ id: id })
  if (!page) {
    ctx.body = HttpResult.response(HttpResult.HttpStatus.FAIL, null, '网页不存在')
  }
  let data = await pageService.editPageNew({
    pagesite: pagesite || page.pagesite,
    realsite: realsite || page.realsite,
    sitemd5: sitemd5 || page.sitemd5,
    pagetitle: pagetitle || page.pagetitle,
    status: status || page.status,
    deltatime: deltatime || page.deltatime,
    channel: channel || page.channel,
    headers: headers || page.headers,
    cates: cates || page.cates,
    followlink: followlink || page.link_unique_by,
    ctype: ctype || page.ctype,
    link_unique_by: link_unique_by || page.link_unique_by,
    encoding: encoding || page.encoding,
    linkrule: linkrule || page.linkrule,
    titlerule: titlerule || page.titlerule,
    contentrule: contentrule || page.contentrule,
    priority: priority || page.priority,
    foreign: foreign || page.foreign,
    group: group || page.group,
    extra: extra || page.extra,
    id: id
  })
  ctx.body = HttpResult.response(HttpResult.HttpStatus.SUCCESS, data, 'SUCCESS')
}

module.exports = {
  addPageNew,
  getPageList,
  deletePageNew,
  editPageNew,
  findPageNewById
}
