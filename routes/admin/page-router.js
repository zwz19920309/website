const apiRouter = require('koa-router')()
const pageCtrl = require('../../controllers/admin/page-ctrl')

apiRouter.post('/addPageNew', pageCtrl.addPageNew)
apiRouter.post('/deletePageNew', pageCtrl.deletePageNew)
apiRouter.get('/getPageList', pageCtrl.getPageList)
apiRouter.post('/editPageNew', pageCtrl.editPageNew)

module.exports = router => {
  router.use('/admin/page', apiRouter.routes(), apiRouter.allowedMethods())
}
