/**
 * Example TCP (Net) Client
 * Connects to port 6000 and sends the word "ping" to the server
 * 
 */

// Dependecies
const net = require('net');

// Define the message to send
let outboundMessage = 'ping';

// Create the client
let client = net.createConnection({'port' : 6000}, () => {
    // Send the message
    client.write(outboundMessage);
});


// When the server writes back, log what it says the kill the client
client.on('data', (inboundMessage) => {
    let messageString = inboundMessage.toString();
    console.log("I wrote " + outboundMessage + " and they said " + messageString);
    client.end();
});