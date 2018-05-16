var express = require("express");
var app = express();
var io = require("socket.io")(app.listen(3000));
var five = require("johnny-five");

app.use(express.static(__dirname + "/recursos"));
app.get("/", function (req, res) {
    console.log("Petición de página");
    res.sendFile(__dirname + "/paginas/blink.html");
});


var board = new five.Board({
    port: "COM3"
});

board.on("ready", function () {
    var led = new five.Led(13);
    console.log("Placa lista para recibir mensajes");
    io.sockets.on("connection", function (socket) {
        socket.on("blink", function () {
            console.log("Mensaje blink recibido");
            led.blink(500);
        });
        socket.on("stop", function () {
            console.log("Mensaje stop recibido");
            led.stop();
        });
        socket.on('toggle', function () {
            console.log("Envío de mensaje toggle");
            led.toggle();
        });
    });
});