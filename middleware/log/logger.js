const log4js = require('log4js')

module.exports = () => {
  return async (ctx, next) => {
    log4js.configure({
      appenders: {
        cheese: {
          type: 'file',
          filename: 'logger.log'
        }
      },
      categories: {
        default: {
          appenders: ['cheese'],
          level: 'info'
        }
      }
    })
    const logger = log4js.getLogger('cheese')
    await next()
  }
}