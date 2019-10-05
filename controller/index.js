const Service = require('../service')
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>user page</h1>'
  },
  home: async (ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>home page ' + ctx.params.id + ' ' + ctx.params.name + '</h1>'
  },
  user: async (ctx, next) => {
    ctx.response.body =
      `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名"/>
        <br/>
        <input name="password" type="password" placeholder="请输入密码"/>
        <br/>
        <button>submit</button>
      </form>
      `
  },
  register: async (ctx, next) => {
    let {
      name,
      password
    } = ctx.request.body
    let data = await Service.register(name, password)
    ctx.response.body = data
  }
}