const db = require('mysql')
const LogApi = require('../logs')

var pool = db.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'testsql'
})

function query(sql) {
  LogApi.writeLog(sql, 'sql')
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          setTimeout(query(), 2000);
          reject('断开重连');
        } else {
          console.error(err.stack || err);
          reject(err);
        }
      } else {
        // 得到结果
        conn.query(sql, (queryErr, result) => {
          if (queryErr) {
            reject(queryErr);
          } else {
            resolve(result);
          }
          // 释放连接
          conn.release();
        })
      }
    })
  })
}

module.exports = query