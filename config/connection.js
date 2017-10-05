var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
    port: 8889
  });
}

connection.connect(function(err) {
  if (err) {
    console.error('There was a missed connection: ' + err.stack);
    return;
  }
  console.log('Connection success! Connected as id ' + connection.threadId);
});

module.exports = connection;
