// grab the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

// parameters sent with
app.post('/api/jwt', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    res.header("Access-Control-Allow-Origin", "*");

    res.redirect(302, '/api/users');
});

// routes will go here
app.get('/api/users', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('This is a redirect page');
});


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
