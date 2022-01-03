// const express = require('express');
// const Views = '../views/admin/';
// // const db_config = require('../config/database');
// const conn = db_config.init();
// const fs = require('fs');
 
// var admin_connect = false;

// module.exports = {
//     adminLoginPage: (req, res) => {
//         res.render(Views + 'admin.ejs');
//     },

//     adminLoginSeesion: (req, res) => {
// //        console.log(req.session.displayname);
//         var body = req.body;
//         var admin_check = false;
//         var admin_sub_check = false;

//         const sql = 'SELECT * FROM ADMIN WHERE ADMIN_ID=? AND ADMIN_PASSWORD=?';
//         const params = [body.admin_id, body.admin_password];
//         conn.query(sql, params, function (err, result) {
//             try {
//                 //var temp = (result[0].ADMIN_GRADE == 'S');
//                 if(result[0].ADMIN_GRADE == 'S'){       
// //                if(temp == true){
// //                    admin_connect = true;
//                     admin_check = true;
//                 }else if(result[0].ADMIN_GRADE =='A'){
//                 admin_check = false;
//                 admin_sub_check = true;
//                 }else if(result[0].ADMIN_GRADE == null){

//                     admin_check = false;
//                     admin_sub_check = false;
//                 }
//             } catch (e) {
//                 admin_check = false;
//                 console.log("admin password wrong");
//                 res.write("<script>alert('please check your ID or Password.')</script>");
//                 res.write("<script>window.location=\"/admin\"</script>");
//             }

//             if (admin_check) {
//                 console.log("admin Login Success");
//                 res.writeHead(302, {
//                     'Set-Cookie': [
//                         'admin_check=true',
//                     ], 'Location': '/admin/select'
//                 });
//                 res.end();
//             }
//             else {
//                 if(admin_sub_check){
//                     console.log("admin sub Login Success");
//                     res.writeHead(302, {
//                         'Set-Cookie': [
//                             'admin_check=true',
//                         ], 'Location': '/user/list'
//                     });
//                     res.end();
//                 }else{
//                 res.write("<script>alert('Confirm your ID')</script>");
//                 res.write("<script>window.location=\"/admin\"</script>");
// //                res.writeHead(302, { 'Location': '/admin' });
//                 }
//             }
//             res.end();
//         });
//     },

//     selectList: (req, res) => {
//         res.render(Views + 'select.ejs');
//     },

//     adminList: (req, res) => {
//         // if(admin_connect){
//         conn.query('SELECT * FROM ADMIN', function (error, result) {
//             console.log(result);
//             console.log(error + " List Error check");
//             res.render(Views + 'list.ejs', { data: result });
//         }); //query end
//         // }else{
//         //     res.render(Views+'false.ejs');
//         // }
//     },

//     adminEditPage: (req, res) => {
//         conn.query('SELECT * FROM ADMIN WHERE ADMIN_ID=?', [req.params.id], function (error, result) {
//             console.log(result[0]);
//             res.render(Views + 'edit.ejs', { data: result });
//         });
//     },

//     adminEdit: (req, res) => {
//         var body = req.body;
//         conn.query('UPDATE ADMIN SET ADMIN_PASSWORD=?, ADMIN_NAME=?, ADMIN_GRADE=? WHERE ADMIN_ID=?',
//             [body.ADMIN_PASSWORD, body.ADMIN_NAME, body.ADMIN_GRADE, req.params.id], function (error, res) {
//                 console.log(error + " Edit Error Check");
//             });
//         res.writeHead(302, { 'Location': '/admin/list' });
//         res.end();
//     },

//     adminSearchPage: (req, res) => {        
//       // res.render(Views + 'search.ejs', {data :result});
//       fs.readFile('./views/admin/search.ejs',function(error,data){
//         res.writeHead(200,{'content-type':'text/html'}); 
//         res.end(data);
//       });
//     },

//     adminSearch: (req, res) => {
//         var body = req.body;
//         var search_id = "%" + body.search_id + "%";
//         conn.query('SELECT * FROM ADMIN WHERE ADMIN_ID LIKE ?', search_id,function (error, result) {
//             console.log(result[0]);
//             res.render(Views + 'search.ejs', { data: result });
//             });
//         // res.writeHead(302, { 'Location': '/admin/search' });
//         // res.end();
//     },

//     adminInsertPage: (req, res) => {
//             res.render(Views + 'insert.ejs');
//     },

//     adminInsert: (req, res) => {
//         var body = req.body;
//         conn.query('INSERT INTO ADMIN(ADMIN_ID, ADMIN_PASSWORD, ADMIN_NAME, ADMIN_GRADE)VALUES(?,?,?,?)',
//             [body.ADMIN_ID, body.ADMIN_PASSWORD, body.ADMIN_NAME, body.ADMIN_GRADE], function (error, res) {
//                 console.log(error + " Insert Error Check");
//             });
//         res.writeHead(302, { 'Location': '/admin/list' });
//         res.end();
//     },

//     adminDelete: (req, res) => {
//         conn.query('DELETE FROM ADMIN WHERE ADMIN_ID=?',
//             [req.params.id]); 
//         res.writeHead(302, { 'Location': '/admin/list' });
//         res.end();
//     },

//     adminLogout: (req, res)=>{
//         res.render(Views + 'admin.ejs');
//     },

//     adminRegisterPage: (req, res) => {        
//         res.render(Views + 'register.ejs');
//       },
  
//       adminRegister: (req, res) => {
//         var body = req.body;
//         conn.query('INSERT INTO ADMIN(ADMIN_ID, ADMIN_PASSWORD, ADMIN_NAME)VALUES(?,?,?)',
//             [body.ADMIN_ID, body.ADMIN_PASSWORD, body.ADMIN_NAME], function (error, res) {
//                 console.log(error + " register Error Check");
//             });
//         res.writeHead(302, { 'Location': '/' });
//         res.end();
//       },
// };

