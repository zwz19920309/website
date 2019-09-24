require('./env')
const mysql = require('mysql2/promise')

const DataDb = mysql.createPool({
  host: process.env['SIGN_IP'],
  user: process.env['SIGN_USER'],
  password: process.env['SIGN_PASS'],
  database: process.env['SIGN_DATABASE'],
  dateStrings: true
})

class DBHelper {

  static async getCatesList(params) {
    let [rows] = await DataDb.query('SELECT * FROM cates')
    return rows
  }

  static async getContTypeList(params) {
    let [rows] = await DataDb.query('SELECT * FROM cont_type')
    return rows
  }

  static async addPageNew(params) {
    let [rows] = await DataDb.query('INSERT INTO page_new SET ?', [
      {
        pagesite: params.pagesite, // 页面起始网址
        realsite: params.realsite, // 抓取真正网址
        sitemd5: params.sitemd5, // 根据网址生成的唯一md5
        pagetitle: params.pagetitle, // 页面标题，默认为网页标题
        channel: params.channel, // 同一个标题可能有多个不同的频道
        status: params.status, // 当前页面监控状态 0 没有监控1  正在监控  2 监控出问题了，创建页面默认就开始监控
        cates: params.cates, // 分类 默认'文章'
        encoding: params.encoding, // 默认 'UTF-8'
        group: params.group, //  默认 '1',
        headers: params.headers, // 头部信息
        deltatime: params.deltatime, // 页面爬取间隔，单位为毫秒，默认30秒钟爬取一次
        linkrule: params.linkrule, // 链接规则，内容为text时为css规则，内容为json时【数组名#内容规则#链接规则】
        titlerule: params.titlerule, // 标题抓取规则
        contentrule: params.contentrule, // 内容抓取规则
        link_unique_by: params.link_unique_by, // 通过链接，文字
        createtime: params.createtime, // 添加监控页面时间
        priority: params.priority, // 页面优先级
        foreign: params.foreign, // 是否外网
        updateat: params.updateat, // 更新时间
        extra: params.extra // 额外
      }])
    return rows
  }

  static async getPageNewList(params) { // 获取网页列表
    let [rows] = await DataDb.query('SELECT * FROM  page_new limit ?, ?', [parseInt(params.page - 1) * parseInt(params.pageSize), parseInt(params.pageSize)])
    let [total] = await DataDb.query('SELECT count(1) as total FROM  page_new')
    return { rows: rows, total: total }
  }

  static async deletePageNew(params) { // 删除网页
    let [rows] = await DataDb.query('DELETE FROM page_new WHERE id = ?', [params.id])
    return rows
  }

  static async findPageNewById(params) { // 删除网页
    let [rows] = await DataDb.query('SELECT * FROM page_new WHERE id = ? limit 1', [params.id])
    let data = rows.length ? rows[0] : null
    return data
  }

  static async editPageNew(params) {
    let [rows] = await DataDb.query('UPDATE page_new SET ? WHERE id = ?', [{
      pagesite: params.pagesite, // 页面起始网址
      realsite: params.realsite, // 抓取真正网址
      sitemd5: params.sitemd5, // 根据网址生成的唯一md5
      pagetitle: params.pagetitle, // 页面标题，默认为网页标题
      channel: params.channel, // 同一个标题可能有多个不同的频道
      status: params.status, // 当前页面监控状态 0 没有监控1  正在监控  2 监控出问题了，创建页面默认就开始监控
      cates: params.cates, // 分类 默认'文章'
      encoding: params.encoding, // 默认 'UTF-8'
      group: params.group, //  默认 '1',
      headers: params.headers, // 头部信息
      deltatime: params.deltatime, // 页面爬取间隔，单位为毫秒，默认30秒钟爬取一次
      linkrule: params.linkrule, // 链接规则，内容为text时为css规则，内容为json时【数组名#内容规则#链接规则】
      titlerule: params.titlerule, // 标题抓取规则
      contentrule: params.contentrule, // 内容抓取规则
      link_unique_by: params.link_unique_by, // 通过链接，文字
      createtime: params.createtime, // 添加监控页面时间
      priority: params.priority, // 页面优先级
      foreign: params.foreign, // 是否外网
      updateat: params.updateat, // 更新时间
      extra: params.extra // 额外
    }, params.id])
    return rows
  }
}

module.exports = DBHelper
