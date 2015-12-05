//server.js
//load the things we need

var express = require('express');
var app = express();
var	path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var request = require('request');
var db = require('./models/index.js');



//configure bodyparser
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// connect to database 
var dbName = 'netflix';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/' + dbName);

//serve public folder as static assets on the root route
var publicPath = path.join(__dirname, 'public');
app.use("/", express.static(publicPath));

//set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs'); 
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/*** ROUTES ***/
var routes = require('./routes');


// INDEX and TEMPLATE ROUTES
app.get('/', routes.index);
// app.get('/', function(request, response){
//   response.render('index');
// });

app.post('/name', routes.name);

app.get('/movies/:user', routes.movies);

app.get('*', routes.index);

app.get('/templates/:name', routes.templates);

// //set the view engine to ejs
// app.set('view engine', 'ejs');
// //serve js & css files
// app.use("/static", express.static("public"));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));




app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});