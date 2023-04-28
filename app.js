const express = require('express');
const session = require('express-session');
const sessionConfig = require('./config/session');
const nunjucks = require('nunjucks');
const authRouter = require('./routes/authRouter');
const gameRouter = require('./routes/gameRouter');
const app = express();
const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({port : 3001});

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

app.use('/static',express.static('public'));
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{res.render('index.html');});
app.use('/auth', authRouter);
app.use('/game', gameRouter);

wss.on("connection", ws =>{
  console.log("연결되었습니다.");
  ws.on("message", data =>{
    console.log(data.toString());
    for(client of wss.clients)
      client.send(data.toString());
  } )
})

app.listen(3000);