var express = require('express');
var router = express.Router();
//require models
var UserEntity = require('../models/userEntity');

/* RESTFUL API for user */
//registration
router.post('/registration', function (req, res,next) {
    if(!req.body) return res.sendStatus(400);
    UserEntity.create(req.body).then(function(user){
      res.send(user);
    }).catch(next);
});
//login
router.post('/login',function(req,res, next){
  //Controll the request :
  if(!req.body) return res.sendStatus(400);
  //validate req.name
  UserEntity.findOne({username: req.body.username}).then(function(user){
      if(user.password ==req.body.password){
        res.send(user);
      }
      else{
        res.send("username or password is not correct !");
      }
  }).catch(next);
  //if request accepted, Server response answer and route to login page
});
//update user
router.put('/user/:id',function(req,res, next){
    UserEntity.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
      UserEntity.findOne({_id:req.params.id}).then(function(user){
        res.send(user);
      });
    });
});


module.exports =router;
