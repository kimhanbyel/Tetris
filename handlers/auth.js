const mysql = require('mysql2');
const mysqlConfig = require('../config/mysql');
const pool = mysql.createPool(mysqlConfig);

const getDate = (d) => `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
const getTime = (d) => `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
const getDateTime = (d) => getDate(d) + ' ' + getTime(d);

const signUpProcess = (req, res)=>{
  pool.query("SELECT id FROM users", (err, rows, field)=>{
    if (err) throw err;
    for(row of rows)
      if(req.body.email === row.id )
        return res.render('signUp.html', { msg : '이미 존재하는 이메일입니다.'})
    
    let sql = "INSERT INTO users (id, nick, pw, joinDate, lastLogin, tier) VALUES (?, ?, ?, ?, ?, ?)";
    let values = [req.body.email, req.body.nick, req.body.password, 
                  getDateTime(new Date()), getDateTime(new Date()), "마스터"];
    pool.query(sql, values, (err, field)=>{
      if (err) throw err;
      res.render('signIn.html');
    })
  })
}


module.exports = {
  signUpProcess,
}