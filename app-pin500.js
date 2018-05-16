var express = require("express");
var app = express();
var io = require("socket.io")(app.listen(3000));
var five = require("johnny-five");

app.use(express.static(__dirname + "/recursos"));
app.get("/", function (req, res) {
    console.log("Petición de página");
    res.sendFile(__dirname + "/paginas/pin500.html");
});


var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {
    var pin = new five.Pin(13);
    console.log("Placa lista para recibir mensajes");
    io.sockets.on("connection", function (socket) {
        socket.on("begin", function () {
            console.log("Mensaje begin recibido");
            pin.high();
            setTimeout(function(){
                    pin.low()
                },500
            );
        });
    });
});