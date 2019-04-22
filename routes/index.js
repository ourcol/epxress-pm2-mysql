var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    // password: '1234abcd!', //生产
    password: '1234abcd.', //开发
    database: 'express'
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
connection.connect()
connection.query('SELECT id FROM user', function(err, rows, fields) {
    if (err) throw err
})
connection.end()


module.exports = router;