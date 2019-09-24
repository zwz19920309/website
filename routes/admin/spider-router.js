const apiRouter = require('koa-router')()
const spiderCtrl = require('../../controllers/admin/spider-ctrl')

apiRouter.post('/getSpiderInfo', spiderCtrl.getSpiderInfo)

module.exports = router => {
  router.use('/admin/spider', apiRouter.routes(), apiRouter.allowedMethods())
}
