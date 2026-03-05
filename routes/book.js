const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET request received for books");
    res.status(200).send("Here is the list of books!");
});

router.post('/', (req, res) => {
    console.log("Book Data Received:", req.body);
    res.status(201).send("Book has been added!");
});

module.exports = router;