var express = require('express')
var app = express()
var path = require('path');

app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})