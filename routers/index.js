const Router = require('koa-router')
const router = new Router()

const {
  login
} = require('../controllers/user')
// 加前缀
router.prefix('/api')

module.exports = () => {
  // 登录
  router.post('/login', login)
}