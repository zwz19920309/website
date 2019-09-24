
const DbHelper = require('../../common/db/db-helper')
/**
  * 获取股票信息
  * @method getCatesList
  * @param  {object} params 参数
  * @return {object} 修改结果
 */
const getCatesList = async (params) => {
  let cates = await DbHelper.getCatesList(params)
  return cates
}

module.exports = {
  getCatesList
}
