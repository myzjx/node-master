const logger = require('./logger')

module.exports = (opt) => {
  const loggerMiddleware = logger(opt)
  return (ctx, next) => {
    return loggerMiddleware(ctx, next)
      .catch((e) => {
        if (ctx.status < 500) {
          ctx.status = 500
        }
        ctx.log.error(e.stack)
        ctx.state.logged = true
        ctx.throw(e)
      })
  }
}