const koa = require('koa')
// const session = require("koa-session2")
const body = require('koa-body')
const middleware = require('./middleware')
const app = new koa()

// 解析 post 参数
app.use(body())
// 中间件
middleware(app)

// 端口选择
let port = 3000
app.listen(port, () => {
  console.log('成功监听端口3000')
})