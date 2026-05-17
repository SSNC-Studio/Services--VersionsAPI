
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`ℹ️ Server running on Port ${PORT}`)
});

app.use(express.json());

app.get("/api/script/GLOBAL-LOADING-SCREEN", (req, res) => {
    res.json({
        version: "1.0.0",
        author: "[SSNC] SPHLAC",
        contributors: {
            Nobody: ""
        },
        totalLines: 1462
    });
});

