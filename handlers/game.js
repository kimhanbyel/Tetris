const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({port : 3001});

wss.on("connection", ws =>{
    console.log("연결되었습니다.");
    
    ws.on("open", data => {
        for(client of wss.clients)
            client.send("누군가 입장했습니다.");
    });

    ws.on("message", data =>{
        console.log(data.toString());
        for(client of wss.clients)
            client.send(data.toString());
    })

    ws.on("close", data => {
        for(client of wss.clients)
            client.send("누군가 퇴장했습니다.");
    });
  })
  

  // 1 30 -> 2 30