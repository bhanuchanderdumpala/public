const express = require("express");
const path = require("path");

const app = express();
const PORT = 8081;

// ✅ Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// ✅ Dynamic route to serve any HTML file inside "public"
app.get("/:filename", (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname,fileName);

    // Check if file exists before sending it
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("File Not Found");
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
