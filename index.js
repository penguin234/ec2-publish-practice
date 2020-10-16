const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send('Hello, i\'m penguin!');
});


const PORT = 80;

const server = app.listen(PORT, function() {
    console.log("Express server started on port " + PORT.toString());
});