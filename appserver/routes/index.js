var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  db.query('SELECT * FROM Persons', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
  res.status(200).send(req.body);

});

module.exports = router;
