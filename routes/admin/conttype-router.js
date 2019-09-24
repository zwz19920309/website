const apiRouter = require('koa-router')()
const conttypeCtl = require('../../controllers/admin/conttype-ctrl')

apiRouter.get('/getContTypeList', conttypeCtl.getContTypeList)

module.exports = router => {
  router.use('/admin/conttype', apiRouter.routes(), apiRouter.allowedMethods())
}
