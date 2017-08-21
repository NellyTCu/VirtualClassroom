var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//create user Schema
var UserSchema = new Schema({
  name: String,
  username : {type: String, required: true , unique:true},
  password : {type: String, required: true },
  admin    : {type:Boolean,
              default:false},
  created_at: Date,
  updated_at: Date
});
var UserEntity = mongoose.model('UserEntity',UserSchema);

module.exports =UserEntity
