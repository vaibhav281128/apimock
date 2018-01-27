'use strict';
import routes from './api';

const Hapi = require('hapi');
const Inert = require('inert');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8001
});



// Add the route
server.route(routes);


// Start the server
async function start() {
    
    try {
        await server.register(Inert);
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    
    
    console.log('Server running at:', server.info.uri);
};
    
start();