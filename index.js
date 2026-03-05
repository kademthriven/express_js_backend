const express = require('express');
const app = express();
let port = 3000;

app.use((req, res, next) => {
    req.user = "Guest";
    next();
});

app.get('/', (req, res) => {
    res.send("Server is running 🚀");
});

app.get('/welcome', (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});