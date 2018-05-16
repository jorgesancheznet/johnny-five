var five = require("johnny-five");

var board = new five.Board({
    port: "COM4"
});

board.on("ready", function () {
    console.log("Placa lista.");

    var led = new five.Led(13);
    led.blink(500);
});

console.log("\nEsperando a que inicialice el dispositivo...");