const express = require("express");
const app = express();

const PORT = 8081; // You can change the port

app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
