const log4js = require('log4js')
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]

// 默认公共参数对象
// const baseInfo = {
//   appLogLevel: 'debug', // 指定记录的日志级别

// }

module.exports = () => {
  const contextLogger = {}
  log4js.configure({
    appenders: {
      cheese: {
        type: 'dateFile', // 日志类型 
        filename: `logs/task`, // 输出的文件名
        pattern: '-yyyy-MM-dd.log', // 文件名增加后缀
        alwaysIncludePattern: true // 是否总是有后缀名
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

  return async (ctx, next) => {
    const start = Date.now()
    methods.forEach((method, i) => {
      contextLogger[method] = (message) => {
        logger[method](message)
      }
    })
    ctx.log = contextLogger
    await next()
    const responseTime = Date.now() - start;
    logger.info(`响应时间为${responseTime/1000}s`);
  }
}