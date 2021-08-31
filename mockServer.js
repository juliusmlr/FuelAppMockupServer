const http = require('http');
const app = require('./app');
const port = 5400;
const server = http.createServer(app);
server.listen(port);
console.log("Server listen to port ", port);
