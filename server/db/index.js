var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });
exports.getMessages = function (res){
  console.log('getMessages is running');
  dbConnection.query("SELECT text, username FROM messages m INNER JOIN users u ON m.U_ID_users = u.U_ID;", [], function(err, results) {
    if (err){throw err;}
    res.status(200).send(results);
  });
};

exports.getUsers = function (res){
  console.log('getUsers is running');
  dbConnection.query("SELECT * FROM users", [], function(err, results) {
    if (err){throw err;}
    res.status(200).send(results);
  });
};

exports.insertMessages = function (data, res){
  console.log('insertMessages is running');
  dbConnection.query("INSERT INTO messages (text, U_ID_users) values (" + JSON.stringify(data.text) + 
    ", (select U_ID from users u where u.username = " + JSON.stringify(data.username) + "));", [],
    function(err, results) {
      if (err){throw err;}
      res.end();
  });
  dbConnection.query("SELECT * FROM messages", [], function(err, results) {
    if (err){throw err;}
    console.log(results);
  });
};

exports.insertUsers = function (data, res){
  dbConnection.query("INSERT INTO users (username) values (" + JSON.stringify(data.username) + ")", [],
    function(err, results) {
      if (err){throw err;}
      res.end();
  });
  // dbConnection.query("SELECT * FROM users", [], function(err, results) {
  //   if (err){throw err;}
  //   console.log(results);
  //   console.log(results.length);
  // });
};