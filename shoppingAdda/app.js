var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateUserCredentials = require('./routes/validateUserCredentials');
var employeeDetails= require('./routes/getempdetails');
<<<<<<< HEAD
var newUserSignup = require('./routes/newUserSignup');
=======
var getdetails = require('./routes/getdeatils');
>>>>>>> 7cc2ad118b7a2897e75db797caa5ec373618af3c



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/user/credentials', validateUserCredentials);
<<<<<<< HEAD
app.use('/employee/details', employeeDetails);
app.use('/newusersignup/register', newUserSignup);

=======
app.use('/get/emp/details', employeeDetails);
app.use('/get/details', getdetails);
>>>>>>> 7cc2ad118b7a2897e75db797caa5ec373618af3c

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
