var mysql = require('mysql');
var connection = mysql.createConnetion({
  host : 'localhost',
  port : 3000,
  user : 'root',
  password: ''
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
// threadId ----> my sql connection ID;
  console.log('connected as id ' + connection.threadId);
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


