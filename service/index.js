module.exports = {
  register: async (name, pwd) => {
    let data
    if (name === 'ico' && pwd === '12345') {
      data = `<h2>Hello, ${name}</h2>`
    } else {
      data = '账户或密码错误'
    }
    return data
  }
}