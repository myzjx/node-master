const bodyParser = require('koa-bodyparser')
const appLog = require('./log')
module.exports = (app) => {
  app.use(appLog({
    env: app.env, // koa 提供的环境变量
    appLogLevel: 'debug',
    projectName: 'api_serve',
    dir: 'logs',
  }))
  app.use(bodyParser())
}