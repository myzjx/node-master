const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./router')
const middleware = require('./middleware')

app.use(bodyParser())

middleware(app)
router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})