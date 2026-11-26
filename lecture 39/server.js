const WebSocket = require("ws")

const wsServer = new WebSocket.Server({port:3000})

wsServer.on("connection",(socket)=>{
    console.log("Connected to server");

    socket.on("message",(msg)=>{
        // socket.send("message:"+ msg)
        wsServer.clients.forEach((clients)=>{
            client.send("message:"+msg)
        })
    })
    
    socket.on("error",(err)=>{
        console.log(err);
        
    })

    socket.on("close",()=>{
        console.log("socket disconnected");
        
    })
})

