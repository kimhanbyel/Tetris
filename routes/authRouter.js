const authHandler = require('../handlers/auth.js');
const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res)=>{
  res.render('signIn.html');
});

router.post('/signInProcess', (req, res)=>{
  console.log(req.body);
  
  // form에서 전송된 사용자 정보를
  // DB에서 찾아서 
  // 있으면 로그인 성공
  // 없으면 
  res.render('signUp.html');
})

router.get('/signUp',  (req, res)=>{
  res.render('signUp.html');
});

router.post('/signUpProcess', authHandler.signUpProcess);

module.exports = router;