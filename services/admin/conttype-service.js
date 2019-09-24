
const DbHelper = require('../../common/db/db-helper')
/**
  * 获取内容信息类别
  * @method getAnalysisData
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const getContTypeList = async (params) => {
  let cates = await DbHelper.getContTypeList(params)
  return cates
}

module.exports = {
  getContTypeList
}
