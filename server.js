const express = require("express");
const path = require("path");

const app = express();
const PORT = 8081; // You can change the port if needed

// 🔥 Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// 🔥 Serve json_empdetails.html when visiting "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "json_empdetails.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
