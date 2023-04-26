//const gameHandler = require('../handlers/game.js');
const express = require('express');
const router = express.Router();

router.get('/single', (req, res)=>{ res.render('tetris_single.html', {user : req.session.user})});
router.get('/Multi', (req, res)=>{res.render('tetris_multi.html', {user : req.session.user})});

module.exports = router;