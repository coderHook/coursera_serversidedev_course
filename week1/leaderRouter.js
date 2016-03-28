var express = require('express');
var bodyParser = require('body-parser');
var leaderRoute = express.Router();

leaderRoute.use(bodyParser.json());

leaderRoute.route('/').all(function(req, res, next){
  res.writeHead(200, {'Content-Type':'type/plain'});
  next();
})

.get(function(req, res, next){

  res.end("We will sent you all the leaders to you!");
})

.post(function(req, res, next){

  res.end('We will add the leader: ' + req.body.name + ' with the description: ' + req.body.description);
})

.delete(function(req, res, next){
  res.end("Deleting all the leaders!")

});

//This is for a scpecific route, same as for the general but we add the id.
leaderRoute.route('/:leaderID').all(function(req, res, next){
  res.writeHead(200, '{Content-Type:type/plain}');
  next();

})

.get(function(req, res, next){

  res.end("We will sent the leaders: "+req.params.leaderID+ " to you!");
})

.put(function(req, res, next){
  res.write('Updating the leader: '+ req.params.leaderID + '.\n');
  res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
  res.end("Deleting the leader: " + req.params.leaderID);

});

module.exports = leaderRoute;
