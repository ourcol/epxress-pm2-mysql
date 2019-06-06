var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var dbconfig = require('./db/DBConfig')
var bodyParser = require('body-parser');
var connection = mysql.createConnection(dbconfig);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainRouter = require('./routes/main');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', mainRouter);

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    // res.header('Content-Type', ' application/x-www-form-urlencoded;charset=UTF-8');

    next();
});
var questions;
var param;

connection.connect();

//查询列表
app.get('/queryList', function (req, res) {
    console.log(req);
    res.status(200),
        connection.query('SELECT id,name,profession,age FROM user', function (err, rows, fields) {
            if (err) throw err
            questions = {
                success: true,
                result: rows
            };
            res.json(questions)
        })

});

var param = { name: '译名' };

//插入列表
app.post('/insert', function (req, res) {
    param = req.body;
    connection.query('INSERT INTO user(name) VALUES(?)', param.name, function (err, result) {
        console.log('req2' + (JSON.stringify(result)));
    })
    res.status(200),
        res.data = {
            result: null,
            success: true
        }
    res.json(res.data);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;