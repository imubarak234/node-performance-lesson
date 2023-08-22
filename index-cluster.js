/**
 * Primary file for the API
 */


// Dependencies
const server = require('./lib/server');
const workers = require("./lib/workers");
const cli = require('./lib/cli');
const cluster = require('cluster');
const os = require('os');

// Declare the app
const app = {};

//Init function 
app.init = function(){

  // If we're on the master thread, start the background workers and the CLI
  if(cluster.isMaster){
      // Start the workers
    workers.init();

    // Start the CLI, but make sure it starts last
    setTimeout( () => {
      cli.init();
    }, 50 );
    // console.log(os.cpus());

    // Fork the process
    for(let i = 0; i < os.cpus().length; i++){
      cluster.fork();
    };
  }
  else {
    // If we're not on the master thread, start the HTTP server
    server.init();
  }
};


// Execute
app.init();

// Export the app 
module.exports = app;