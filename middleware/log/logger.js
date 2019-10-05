const log4js = require('log4js');
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'api_serve'
}

module.exports = (options) => {
  const contextLogger = {}
  const appenders = {}

  const opts = Object.assign({}, baseInfo, options || {})
  const {
    env,
    appLogLevel,
    dir
  } = opts

  appenders.appInfo = {
    type: 'dateFile',
    filename: `${dir}/task`,
    pattern: '-yyyy-MM-dd.log',
    alwaysIncludePattern: true
  }

  if (env === "dev" || env === "local" || env === "development") {
    appenders.out = {
      type: "console"
    }
  }
  let config = {
    appenders,
    categories: {
      default: {
        appenders: Object.keys(appenders),
        level: appLogLevel
      }
    }
  }

  const logger = log4js.getLogger('appInfo');
  log4js.configure(config)
  return async (ctx, next) => {
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](message)
      }
    })

    ctx.log = contextLogger;

    await next()
  }
}