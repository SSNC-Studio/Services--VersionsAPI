
const express = require("express");
const { version } = require("react");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`ℹ️ Server running on Port ${PORT}`)
});

app.use(express.json());

const CURRENT_VERSION_JSON = {
    version: "1.0.1.1",
    author: "[FOUNDER] SPHLAC",
    contributors: "(Nobody)",
    compileDate: "20-05-2026 (dd/mm/yyyy)",
    allowPreviousVersions: false,
    DEPRECATED: false,
};
const CURRENT_VERSION = "1.0.1.1";

app.get("/api/script/GLOBAL-LOADING-SCREEN", (req, res) => {
    res.json(CURRENT_VERSION_JSON);
});

app.get(`/api/script/GLOBAL-LOADING-SCREEN/${CURRENT_VERSION}`, (req, res) => {
    res.json(CURRENT_VERSION_JSON);
});

app.get("/api/script/GLOBAL-LOADING-SCREEN/1.0.1", (req, res) => {
    res.json({
        version: "1.0.1",
        author: "[FOUNDER] SPHLAC",
        contributors: "[FOUNDER] camaleon45678., [DEV] Hugo",
        compileDate: "17-05-2026 (dd/mm/yyyy)",
        allowPreviousVersions: false,
        DEPRECATED: false,
    })
})

app.get("/api/script/GLOBAL-LOADING-SCREEN/1.0.0", (req, res) => {
    res.json({
        version: "1.0.0",
        author: "[FOUNDER] SPHLAC",
        contributors: "(Nobody)",
        compileDate: "13-05-2026 (dd/mm/yyyy)",
        DEPRECATED: true,
    });
})

