const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection');
    res.end('Hello Awesome, start new build');

});
const PORT = process.PORT || 8080;
server.listen(PORT, () => console.log('Listening'));
