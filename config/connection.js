var mysql = require("mysql");

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "B1gB@dB3llig3r@nt",
    database:"burgers_db"
  })
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   PORT: 3306,
//   user: "root",
//   password: "B1gB@dB3llig3r@nt",
//   database: "burgers_db"
// });

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;