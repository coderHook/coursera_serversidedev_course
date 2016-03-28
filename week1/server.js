//This is the server that is needed in order to complete the first exercise of the coursera server side NodeJS course.
//Initialize variables
// Require needed modules
var express = require('express'),
    morgan = require('morgan');
// Set port and hostname of server
var hostname = 'localhost';
var port = 3000;
//var ip = '0.0.0.0';

// Build our application
var app = express();

// Use morgan for logging stuff in the console
app.use(morgan('dev'));

// Require our routers
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
// Use our routers
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);
// Serve static files
app.use(express.static(__dirname + '/public'));
// Start the server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}`);
});
