// var mysql = require('mysql');
// var db_info = {
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'password',
//     database: 'testdb'
// }

const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

module.exports ={
 init: function(){
     return mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true } );
 },
 connect : function(con){
    var mdb = mongoose.connection;
    mdb.on('error', console.error.bind(console, 'connection error'));
    mdb.once('open', function callback(){
        console.log("mongo db is connected");
    });
 },
 collection: function(dbs){ //1회성 
   var db = mongoose.connection;
   var url = "mongodb://localhost:27017/test";
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gansik");
    dbo.createCollection("gansik", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
 }

}

 