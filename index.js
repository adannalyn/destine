const express = require('express');
const app = express();

// Defining get request at '/' route
app.get('/', function(req, res) {
    res.json({
        "slackUsername": "Zephyr",
        "backend": true,
        "age": 32,
        "bio": "Backend Developer"
    });
});

// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
    console.log('Server is running at port 3000');
});
