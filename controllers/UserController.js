const express = require('express');

const Views = '../views/user/';
const db_config = require('../config/database');
const conn = db_config.init();
var User = require('../model/userModel');
var MongoClient = require('mongodb').MongoClient;

 module.exports = {

    userRegister: (request, response)=>{	

        var body = request.body;
        
        console.log('saveDB 호출');
        saveDB(body.gansik);
        
        response.end();
    },
    userFind : (request, response) =>{
        var body = request.body;
        console.log("find 호출");
        findDB();
    },
    createUser: (request, response) =>{
        console.log(request.body);
        var newUser = new User(request.body);
        newUser.modifyDate = new Date();
        
        newUser.save(function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log('Saved');
            }
        });
        res.end('createUser');

    },
    getUser : (request, response) =>{
        User.findOne({_id : req.params.uid}, function(err,user){
            console.log('Read One User');
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
        res.end('getUser');
    },
    updateUser : (request, response) =>{
        User.findById({_id : req.params.uid},function(err,user){
            console.log('Update user');
            if(err){
                console.log(err);
            }else{
                user.userPw = req.body.userPw;
                user.modifyDate = new Date();

                user.save(function(err,modify_user){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(modify_user);
                    }
                });
            }
            res.end('updateUser');
        });

    },
    deleteUser: (request, response)=>{
        User.remove({_id:req.params.uid},function(err,output){
            console.log('Delete user');
            if(err){
                console.log(err);
            }else{
                console.log(output);
            }
        });
        res.end('deleteUser');

    }
 };
 
 //데이터베이스 등록
function saveDB(body){
	var databaseUrl = 'mongodb://localhost:27017/DB';
	MongoClient.connect(databaseUrl, function(err, db) {
	if (err) throw err;

	database = db.db("gansik");

	database.collection("gansik").insertOne(body, function(err, res) {
			if (err) throw err;
			console.log("등록이 완료되었습니다.");
			db.close();
		});
	});	
}

function findDB(){	
	var url = "mongodb://localhost:27017/DB";

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		  
		database = db.db("gansik");
		
		//모든 db 조회 가능
		database.collection("gansik").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('DB에서 가져온 결과 : ');
			console.log(result);
			db.close();
		});
	});
	
}
//     userList: (req, res) => {
//         // if(user_connect){
//         conn.query('SELECT * FROM USER', function (error, result) {
//             console.log(result);
//             console.log(error + "List Error check");
//             res.render(Views + 'list.ejs', { data: result });
//         }); //query end
//         // }else{
//         //     res.render(Views+'false.ejs');
//         // }
//     },

//     userEditPage: (req, res) => {
//         conn.query('SELECT * FROM USER WHERE USER_ID=?', [req.params.id], function (error, result) {
//             console.log(result[0]);
//             res.render(Views + 'edit.ejs', { data: result });
//         });
//     },

//     userEdit: (req, res) => {
//         var body = req.body;
//         conn.query('UPDATE USER SET USER_PASSWORD=?, USER_NAME=?, USER_EMAIL=?, USER_PHONE=? WHERE USER_ID=?',
//             [body.USER_PASSWORD, body.USER_NAME, body.USER_EMAIL, body.USER_PHONE, req.params.id], function (error, res) {
//                 console.log(error + " Edit Error Check");
//             });
//         res.writeHead(302, { 'Location': '/user/list' });
//         res.end();
//     },

//     userSearchPage: (req, res) => {        
//         // res.render(Views + 'search.ejs', {data :result});
//         fs.readFile('./views/user/search.ejs',function(error,data){
//           res.writeHead(200,{'content-type':'text/html'}); 
//           res.end(data);
//         });
//       },
  
//       userSearch: (req, res) => {
//           var body = req.body;
//           var search_id = "%" + body.search_id + "%";
//           conn.query('SELECT * FROM USER WHERE USER_ID LIKE ?', search_id,function (error, result) {
//               console.log(result[0]);
//               res.render(Views + 'search.ejs', { data: result });
//               });
//           // res.writeHead(302, { 'Location': '/user/search' });
//           // res.end();
//       },
  
//       userInsertPage: (req, res) => {
//               res.render(Views + 'insert.ejs');
//       },
  
//       userInsert: (req, res) => {
//           var body = req.body;
//           conn.query('INSERT INTO USER(USER_ID, USER_PASSWORD, USER_AGE, USER_GENDER, USER_NAME, USER_EMAIL, USER_PHONE, USER_PROGRAM )VALUES(?,?,?,?,?,?,?,?)',
//               [body.USER_ID, body.USER_PASSWORD, body.USER_AGE, body.USER_GENDER, body.USER_NAME, body.USER_EMAIL,body.USER_PHONE, body.USER_PROGRAM], function (error, res) {
//                   console.log(error + " Insert Error Check");
//               });
//           res.writeHead(302, { 'Location': '/user/list' });
//           res.end();
//       },
  
//       userDelete: (req, res) => {
//           conn.query('DELETE FROM USER WHERE USER_ID=?',
//               [req.params.id]); 
//           res.writeHead(302, { 'Location': '/user/list' });
//           res.end();
//       },
      
//       userDIDPage: (req, res) => {
//         conn.query('SELECT * FROM USER WHERE USER_ID=?', [req.params.id], function (error, result) {
//             console.log(result[0]);
//             res.render(Views + 'createdid.ejs', { data: result });
//         });
//     },

//       userCreateDID : (req, res) => {
//         var body = req.body;
//         conn.query('UPDATE USER SET USER_DID =? WHERE USER_ID=?',
//             [body.USER_DID , req.params.id], function (error, res) {
//                 console.log(error + " DID  Error Check");
//             });
//         res.writeHead(302, { 'Location': '/user/list' });
//         res.end();
//     },

 
