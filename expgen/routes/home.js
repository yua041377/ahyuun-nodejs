const { application, response } = require('express');
var express = require('express');
var connect = require('./connect');
var router = express.Router();

// Home
router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/about', function(req, res){
  res.render('home/about');
});

app.get('/', (request,response) => {
  response.send(connect)
});

module.exports = router;