var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "burgers_db"
  });
  

module.exports = con