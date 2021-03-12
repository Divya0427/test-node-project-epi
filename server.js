//import * as _ from 'underscore';
const livereload = require('livereload');
const server = livereload.createServer();
server.watch(__dirname + "/");

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/myCode', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/p', function(req, res){
  res.sendFile(__dirname + '/p.html');
});

app.get('/modifiedP', function(req, res){
  res.sendFile(__dirname + '/modifiedP.html');
});

app.use(function(req, res) {
  res.send("<strong>Please check the URL properly. Page Not Found 404</strong>");
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



  
  