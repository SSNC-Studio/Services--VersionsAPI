
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`ℹ️ Server running on Port ${PORT}`)
});

app.use(express.json());

app.get("/api/script/GLOBAL-LOADING-SCREEN?uid=1234", (req, res) => {
    res.json({
        version: "1.2.1"
    });
});

