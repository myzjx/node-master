const router = require('koa-router')()
const controll = require('../controller')

module.exports = (app) => {
  /**
   * 注册
   * @api {POST} /api/user/registered 注册
   * @apiDescription 注册用户
   * @apiName registered
   * @apiParam (参数) {String} account 账号
   * @apiParam (参数) {String} password 密码
   * @apiParam (参数) {Number} type 用户类型: 0: 手机注册 1: 论坛注册 2: 管理平台添加
   * @apiSampleRequest /api/user/registered
   * @apiGroup User
   * @apiVersion 0.0.1
   */
  router.get('/', controll.index)

  router.get('/home/:id/:name', controll.home)
  /**
   * 登录
   * @api {GET} /user 登录
   * @apiDescription 用户登录
   * @apiName login
   * @apiParam (参数) {String} account 账号
   * @apiParam (参数) {String} password 密码
   * @apiSampleRequest /user
   * @apiGroup User
   * @apiVersion 0.0.1
   */
  router.get('/user', controll.user)

  router.post('/user/register', controll.register)

  app.use(router.routes())
    .use(router.allowedMethods())
}