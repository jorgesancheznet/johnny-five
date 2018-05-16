var express=require("express");
var app=express();
var io=require("socket.io")(app.listen(3000));
var five=require("johnny-five");
app.use(express.static(__dirname+"/app"));
app.get("/",function(req,res){
    res.sendfile(__dirname+"/app/index.html");
});


var board=new five.Board({
    port:"COM4"

});

board.on("ready",function(){
    var led = new five.Led(13);
    io.on("connection",function(socket){
        socket.on("blink",function(){
            led.blink(500);
        });
        socket.on("stop",function(){
            led.stop();
        })
    });
});