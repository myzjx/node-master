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
    if (name === 'ico' && password === '12345') {
      ctx.response.body = `<h2>Hello, ${name}</h2>`
    } else {
      ctx.response.body = '账户或密码错误'
    }
  }
}