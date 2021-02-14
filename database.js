const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'testi123',
  database: 'carsdb'
});
module.exports = connection;