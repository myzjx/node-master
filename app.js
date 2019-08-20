const koa = require('koa')
const body = require('koa-body')
const middleware = require('./middleware')
const session = require("koa-session2")
const store = require('./utils/store')
const app = new koa()

// session配置
app.use(session({
  store: new store(),
  key: "SESSIONID",
}))
// 解析post 参数
app.use(body())
// 中间件
middleware(app)

// 端口选择
let port = 3000
app.listen(port, () => {
  console.log('成功监听端口3000')
})