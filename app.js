require('dotenv').config()

console.log("Server Started");
const Server = require('./models/server.js');

const server = new Server();

server.listen();