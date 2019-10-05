const router = require('koa-router')()
const controll = require('../controller')

module.exports = (app) => {
  /**
   * 登录
   * @api {GET} /login 登录
   * @apiDescription 用户登录
   * @apiName login
   * @apiParam (参数) {String} account 账号
   * @apiParam (参数) {String} password 密码
   * @apiSampleRequest /user
   * @apiGroup User
   * @apiVersion 0.0.1
   */
  router.post('/api/user/login', controll.register)

  app.use(router.routes())
    .use(router.allowedMethods())
}