const log4js = require('log4js')

module.exports = () => {
  return async (ctx, next) => {
    const start = Date.now()
    log4js.configure({
      appenders: {
        appInfo: {
          type: 'file',
          filename: 'logger.log'
        }
      },
      categories: {
        default: {
          appenders: ['appInfo'],
          level: 'info'
        }
      }
    })
    const logger = log4js.getLogger('appInfo')
    await next()
    const end = Date.now()
    const responseTime = end - start;
    logger.info(`响应时间为${responseTime/1000}s`);
  }
}