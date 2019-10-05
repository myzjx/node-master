let dbConf = null;
const DEV = {
  database: 'test', //数据库
  user: 'root', //用户
  password: 'root', //密码
  port: '3306', //端口
  host: '127.0.0.1' //服务ip地址
}

const PRO = {
  database: 'test', //数据库
  user: 'root', //用户
  password: 'root', //密码
  port: '3306', //端口
  host: '127.0.0.1' //服务ip地址
}
dbConf = DEV;
module.exports = dbConf;