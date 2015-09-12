var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET todo list. */
router.get('/todos', function(req, res, next) {
  Todo.find({}, function(err, todos){
    if(err){
      console.log(err);
      next(err);
    } else {
      res.json(todos);
    }
  });
});

/* POST new todo */
router.post('/todos', function(req, res, next) {
  var todo = new Todo(req.body);
  todo.save(function(err){
    if(err) {
      console.log(err);
      res.send('There was an error:', err.message);
    }
    else {
      Todo.find({}, function(err, todos){
        if(err){
          console.log(err);
          next(err);
        } else {
          res.json(todos);
        }
      });
    }
  });
});

/* PUT update complete status */
router.put('/todos/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo){
    if(err){
      console.log(err);
      next(err);
    } else {
      Todo.find({}, function(err, todos){
        if(err){
          console.log(err);
          next(err);
        } else {
          res.json(todos);
        }
      });
    }
  })
});

/* DELETE delete task */
router.delete('/todos/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo){
    if(err){
      console.log(err);
      next(err);
    } else {
      Todo.find({}, function(err, todos){
        if(err){
          console.log(err);
          next(err);
        } else {
          res.json(todos);
        }
      });
    }
  })
});


module.exports = router;
