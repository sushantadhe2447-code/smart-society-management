// Database setup for SQLite

const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) { // Cannot open database
        console.error(err.message);
        throw err;
    }
    console.log('Connected to the SQlite database.');
});

module.exports = db;