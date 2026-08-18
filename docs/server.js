const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        bot: "SHADOW HUNTER",
        status: "ONLINE"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`
╔══════════════════════════════════════╗
║       ⚔️ SHADOW HUNTER WEB ⚔️        ║
╠══════════════════════════════════════╣
║                                      ║
║   🌐 Website: http://127.0.0.1:${PORT}    ║
║                                      ║
╚══════════════════════════════════════╝
`);
});
