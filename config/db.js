const mysql = require("mysql2");

// Why Pool?
// Using createPool() manages connections efficiently and prevents memory leaks.

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Yashav@3528",
    database: "student_management",
    connectionLimit: 10
});

module.exports = db;