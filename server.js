const http = require('http');
const fs = require('fs')

function readHtml(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found')
        } else {
            response.write(data);
        }
        response.end();
    });
}
http.createServer(readHtml).listen(8000);
console.log('Now listening @ http://localhost:8000/')




