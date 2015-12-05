var express = require('express');
var Post = require('../models/movie.js');

module.exports = function(app) {
  // INDEX 
  app.get('/api/movies', function(req, res){
    // INDEX - GET ALL POSTS
    Movie.find().sort('-created_at').exec(function(err, posts) {
      if (err) { return res.status(404).send(err); }
      res.send(movies); 
    });    
  });

  // CREATE
  app.post('/api/movies', function(req,res){  
   // var post = new Post({ content: req.body.content });
   // post.save(function (err, post) {
    Movie.create(req.body, function(err, post){
      if (err) { return res.send(err); }
      console.log(post);
      res.status(201).send(post);
    });
  });

  app.get('/api/movies/:movie_id',function(req,res){   
    Movie.findById(req.params.movie_id, function(err, post) {
      if (err) { return res.status(404).send(err); }
      res.send(post); 
    });
  });

    // full update of one post by id
  app.put('/api/movies/:movie_id', function(req,res){ 
    Movie.findOneAndUpdate({ _id: req.params.movie_id}, req.query.post, function (err, post) {
      if (err) { return res.send(err); }
      res.send(post);
    });
  });

    // delete one post by id
  app.delete('/api/movies/:movie_id', function(req,res){   
    Movie.findByIdAndRemove(req.params.movie_id, function (err, post) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });
};