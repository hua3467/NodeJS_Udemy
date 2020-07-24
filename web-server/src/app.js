const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("Hello express!");
});

app.listen(3000, () => {
    console.log("Serveri is up on port 3000.");
});