const router = require('../routers');
const http = require('./plugins/http');
const login = require('./plugins/login');

module.exports = (app) => {
  app.use(http());
  app.use(login());
  app.use(router());
}