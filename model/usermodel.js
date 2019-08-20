const Tips = require('../utils/tips')
const {
  query
} = require('../config/db')

class userModel {
  async getUserInfo(account, password) {
    const sql = `SELECT uid from user where account = ${account} and password = ${password};`;
    const data = await query(sql);
    return data
  }
}

module.exports = userModel