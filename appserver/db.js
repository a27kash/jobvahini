var mysql = require('mysql');

var con = mysql.createConnection({
  host: "colorgap.com",
  port: 3306,
  user: "tonew",
  password: "2c1t3012",
  database: "jobportal"
});

module.exports = con;