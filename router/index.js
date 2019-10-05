const router = require('koa-router')()
const Controller = require('../controller')

module.exports = () => {
  router.get('/', Controller.index)

  router.get('/home/:id/:name', Controller.home)

  router.get('/user', Controller.user)

  router.post('/user/register', Controller.register)

  app.use(router.routes())
    .use(router.allowedMethods())
}