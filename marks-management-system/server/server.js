const express = require('express');
const db = require('./db');
const routes = require('./routes');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Serve static files (frontend)
app.use(express.static('public'));

// Use routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});