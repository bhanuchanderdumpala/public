const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./database/school.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        createTables();
    }
});

// Create tables
function createTables() {
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS marks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            subject TEXT,
            fa1 INTEGER,
            fa2 INTEGER,
            fa3 INTEGER,
            fa4 INTEGER,
            sa1 INTEGER,
            sa2 INTEGER,
            final_exam INTEGER,
            FOREIGN KEY (student_id) REFERENCES students (id)
        )
    `);
}

module.exports = db;