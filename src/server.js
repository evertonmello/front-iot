//Install express server
const express = require('express');
const app = express();
const path = require('path')

// Serve only the static files form the dist directory
app.get('/', function(req,res){
    var pat =  path.join(__dirname + '/dist/index.html')
    res.sendFile(pat)
});

app.listen( '8080', function(){
    console.log('server on 8080')
});