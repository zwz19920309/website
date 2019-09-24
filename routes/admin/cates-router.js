const apiRouter = require('koa-router')()
const catesCtrl = require('../../controllers/admin/cates-ctrl')

apiRouter.get('/getCatesList', catesCtrl.getCatesList)

module.exports = router => {
  router.use('/admin/cates', apiRouter.routes(), apiRouter.allowedMethods())
}
