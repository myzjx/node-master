const Tips = require('../utils/tips')
const UserModel = require('../model/usermodel')
const userModel = new UserModel()

async function login(ctx, next) {
  const {
    account,
    password
  } = ctx.request.body
  const userInfo = await userModel.getUserInfo(account, password)
  ctx.body = {
    data: userInfo,
    ...Tips[20008]
  }
}

module.exports = {
  login
}