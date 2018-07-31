//Install express server
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

// Serve only the static files form the dist directory

app.listen(process.env.PORT || '8080', function(){
    console.log('server on 8080')
});