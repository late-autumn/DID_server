const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');
// const adminRouter = require('./routes/AdminRoute');
const userRouter = require('./routes/UserRoute');
const session = require('express-session');
 
// const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const db_config = require(__dirname + '/config/database.js');
const conn = db_config.init(); 
db_config.connect(conn);

//1회성
//db_config.collection(conn);

// mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true } );

// var mdb = mongoose.connection;
// mdb.on('error', console.error.bind(console, 'connection error'));
// mdb.once('open', function callback(){
//     console.log("mongo db is connected");
// });



 
//db_config.connect(conn);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
 

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


  

app.get('/', (req, res) => {
  // res.status(200).send('Welcome, CodeStates Admin Page!');
   res.render('../views/admin/home.ejs');
});


// app.use('/admin', adminRouter);
 app.use('/user', userRouter);

 
 








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'));
module.exports = app;
