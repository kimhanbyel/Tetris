const gameHandler = require('../handlers/game.js');
const express = require('express');
const router = express.Router();

router.get('/single', (req, res)=>{ res.render('game/single/index.html', {user : req.session.user})});
router.get('/Multi', (req, res)=>{res.render('game/multi/index.html', {user : req.session.user})});

module.exports = router;