const request = require('request-promise')
const config = require('../../config/config')
const DbHelper = require('../../common/db/db-helper')
/**
  * 获取股票信息
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const getSpiderInfo = async (params) => {
  let page = await DbHelper.findPageNewById({ id: params.id })
  let options = {
    method: 'POST',
    uri: config.spider.uri,
    form: {
      pageTitle: page.pagetitle,
      realSite: page.realsite,
      pageSite: page.pagesite,
      channel: page.channel,
      deltaTime: page.deltatime,
      cates: page.cates,
      priority: page.priority,
      followLink: page.followlink,
      headers: page.headers,
      linkRule: page.linkrule,
      titleRule: page.titlerule,
      contentRule: page.contentrule,
      ctype: page.ctype,
      linkUniqueBy: page.linkUniqueBy,
      encoding: page.encoding,
      foreign: page.foreign,
      extra: page.extra,
      detailEncoding: page.detail_encoding,
      asSpecial: page.as_special
    }
  }
  let res = await request(options)
  return res
}

module.exports = {
  getSpiderInfo
}
