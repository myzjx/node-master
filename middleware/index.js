const routers = require('../routers');
const http = require('./plugins/http');

module.exports = (app) => {
  app.use(http());
  app.use(routers());
}