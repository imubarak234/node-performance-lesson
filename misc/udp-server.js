/**
 * Example UDP Server
 * Creating a UDP datagramm server listening on 6000
 */


// Depenedecies
const dgram = require('dgram');

// Create a server
let server = dgram.createSocket('udp4');

server.on('message', (messageBuffer, sender) => {
    // Do something with an incoming message or do something with the sender
    let messageString = messageBuffer.toString();
    console.log(messageString);
});

// Bind to 6000
server.bind(6000);
