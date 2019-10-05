const Service = require('../service')
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>user page</h1>'
  },
  register: async (ctx, next) => {
    let {
      account,
      password
    } = ctx.request.body
    let data = await Service.register(account, password)
    ctx.response.body = {
      code: 20001,
      success: true,
      message: data
    }
  }
}