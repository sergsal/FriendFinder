//Npm packages that will be used on the server
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creating express server
var app = express();
// setting the port
var PORT = process.env.PORT || 8080;

//using body parser to properly interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
 type: 'application/vnd.api+json'
}));

//
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
 console.log("App listening on PORT: " + PORT);
});
