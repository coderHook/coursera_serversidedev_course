
var express = require('express');
var bodyParser = require('body-parser');
var promoRouter = express.Router();

// Use the body-parser module to parse data sent
promoRouter.use(bodyParser.json());

//Routes for the root path of the application
promoRouter.route('/').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
})
.get(function(req, res, next) {
  res.end('Will send all the promos to you!');
})

.post(function(req, res, next) {
  res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
  res.end('Deleting all promos');
});

// Here we have the specific dish
promoRouter.route('/:promoId').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
})
.get(function(req, res, next) {
  res.end('Will send details of the promo: ' + req.params.promoId + ' to you!');
})
.put(function(req, res, next) {
  res.write('Updating the promo: '+ req.params.dishId + '.\n');
  res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);
})


.delete(function(req, res, next) {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;
