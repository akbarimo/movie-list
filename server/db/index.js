const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'momo',
  password: 'BosphorusBaklava69',
  database: 'MovieList'
});

module.exports = connection;