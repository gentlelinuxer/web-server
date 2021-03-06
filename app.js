const http = require('http');
const hostname = '0.0.0.0';
const port = 80;
var os = require("os");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World ! (Real Linux) \n');
    res.write(os.hostname());
    res.end('\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
