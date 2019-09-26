
const DbHelper = require('../../common/db/db-helper')
/**
  * 添加监控页面
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const addPageNew = async (params) => {
  let res = await DbHelper.addPageNew(params)
  return res
}

/**
  * 删除监控页面
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const deletePageNew = async (params) => {
  let res = await DbHelper.deletePageNew(params)
  return res
}
/**
  * 获取监控页面列表
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const getPageList = async (params) => {
  let res = await DbHelper.getPageNewList(params)
  return res
}

const getPageNewListAll = async (params) => {
  let datas = await DbHelper.getPageNewListAll(params)
  return datas
}

/**
  * 编辑监控页面
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const editPageNew = async (params) => {
  let res = await DbHelper.editPageNew(params)
  return res
}

/**
  * 根据id获取监控页面
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const findPageNewById = async (params) => {
  let res = await DbHelper.findPageNewById(params)
  return res
}

module.exports = {
  addPageNew,
  getPageList,
  deletePageNew,
  editPageNew,
  findPageNewById,
  getPageNewListAll
}
