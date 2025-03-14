const express = require('express');
const db = require('./public/db');
const router = express.Router();

// Add a new student
router.post('/students', (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO students (name) VALUES (?)', [name], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
    });
});

// Add marks for a student
router.post('/marks', (req, res) => {
    const { studentId, subject, fa1, fa2, fa3, fa4, sa1, sa2, finalExam } = req.body;
    db.run(
        'INSERT INTO marks (student_id, subject, fa1, fa2, fa3, fa4, sa1, sa2, final_exam) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [studentId, subject, fa1, fa2, fa3, fa4, sa1, sa2, finalExam],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID });
        }
    );
});

// Get all students with marks
router.get('/students', (req, res) => {
    db.all('SELECT * FROM students', (err, students) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(students);
    });
});

module.exports = router;