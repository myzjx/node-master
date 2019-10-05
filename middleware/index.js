const appLog = require('./log')
module.exports = (app) => {
  app.use(appLog())
}