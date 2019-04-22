var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var userSQL = require('../db/usersql');
var dbconfig = require('../db/DBConfig')
var connection = mysql.createConnection(dbconfig)
var app = express()
   
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/addUser', function (req, res, next) {
connection.connect()
var param = req.query || req.params;
  connection.query('INSERT INTO user(id,name) VALUES(?,?)', [param.id, param.name], function (err, result) {
  console.log(req.param)
  if(result) {      
    result = {   
             code: 200,   
            msg:'增加成功'
    };  
}   
})
connection.end()
  res.render('users');
});

module.exports = router;
