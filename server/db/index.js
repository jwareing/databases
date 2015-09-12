var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

exports.insertMessages = function (data, res){
  // dbConnection.connect();
  // dbConnection.query("INSERT INTO rooms (roomname) values (" + JSON.stringify(data.roomname) + ");", [],
  //   function(err, results) {
  //     if (err){throw err;}
  // });
  console.log('insertMessages is running');
  dbConnection.query("INSERT INTO messages (text, U_ID_users) values (" + JSON.stringify(data.message) + 
    ", (select U_ID from users u where u.username = " + JSON.stringify(data.username) + "));", [],
    function(err, results) {
      if (err){throw err;}
      // dbConnection.end();
      res.end();
  });
  dbConnection.query("SELECT * FROM messages", [], function(err, results) {
    if (err){throw err;}
    console.log(results);
  });

};
exports.insertUsers = function (data, res){
  //dbConnection.connect();
  dbConnection.query("INSERT INTO users (username) values (" + JSON.stringify(data.username) + ");", [],
    function(err, results) {
      if (err){throw err;}
      res.end();
  });
  dbConnection.query("SELECT * FROM users", [], function(err, results) {
    if (err){throw err;}
    console.log(results);
    console.log(results.length);
  });
  //dbConnection.end();
};

// dbConnection.query("SELECT * FROM messages", [], function(err, results) {
//     if (err){throw err;}
//     console.log(results);
//     console.log(results.length);
//   });