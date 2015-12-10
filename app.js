var express = require('express');
var app = express();

function helloWorld(request, response) {
    response.send('Hello World\n');
    console.log('Request received.');
}

app.get('/', helloWorld).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
