var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    "userId" : String,
    "userPw" : String,
    "modifyDate" : Date
});

module.exports = mongoose.model('user', userSchema);