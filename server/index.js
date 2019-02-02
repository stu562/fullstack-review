const express = require('express');
const mongoose = require('mongoose');
const db = require('../database/index.js')
const helper = require('../helpers/github.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
const connection = require('../database/index.js');//connection to server

//send a request from server to api
const request = require('request');

app.post('/repos', function (req, res) {
console.log('got the postman');
  // var myData = new Repo(req.body);
  // //req.body is from the client 
  // console.log('hi', req.body.name);

  // Repo.save( {} ,function(err,data){
  //     if(err){ 
  //       console.log(err);
  //       res.send(err)
  //     };
      // Repo.find({},function(err,data){
      //     if(err){
      //       res.send(err);
      //       res.json(data);
      //     }
      // });
  // });
});


//server recieving a get request 
app.get('/repos',function(req,res){
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('get request worked');
  Repo.find({},function(err, data){
    if(err){res.send(err)};
      res.json(data);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

