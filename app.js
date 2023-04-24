const express = require('express');
const session = require('express-session');
const sessionConfig = require('./config/session');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
  res.render('index.html');
});

app.get('/auth/signIn', (req, res)=>{
  res.render('signIn.html');
});

app.get('/auth/signUp', (req, res)=>{
  res.render('signUp.html');
});

app.post('/auth/signInProcess', (req, res)=>{
  console.log(req.body);
  res.render('signUp.html');
  // form에서 전송된 사용자 정보를
  // DB에서 찾아서 
  // 있으면 로그인 성공
  // 없으면 회원가입으로
});



app.listen(3000);