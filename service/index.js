const query = require('../db')

module.exports = {
  register: async (name, pwd) => {
    // let data
    // if (name === 'test' && pwd === '123456') {
    //   data = '登录成功'
    // } else {
    //   data = '账户或密码错误'
    // }
    const sql = `SELECT uid from user_info where account = ${account} and password = ${password};`;
    const data = await query(sql);
    return data
  }
}