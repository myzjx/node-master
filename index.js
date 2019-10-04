const Koa = require('koa')
// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
app.use(bodyParser())

router.get('/users/:id', async (ctx, next) => {
  ctx.response.body = '<h1>user page</h1>'
  ctx.user = {
    id: 3,
    name: 'xiaoming'
  }
  await next(),
    async (ctx) => {
      console.log(ctx.user)
    }
})
// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})