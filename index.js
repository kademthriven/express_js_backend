const express = require('express');
const app = express();
let port = 4000;

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); // Move to next middleware/route
});

app.use(express.json());

// GET /products
app.get('/products', (req, res) => {
    res.status(200).send("Here is the list of all products.");
});

// POST /products
app.post('/products', (req, res) => {
    res.status(201).send("A new product has been added.");
});

// GET /categories
app.get('/categories', (req, res) => {
    res.status(200).send("Here is the list of all categories.");
});

// POST /categories
app.post('/categories', (req, res) => {
    res.status(201).send("A new category has been created.");
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});