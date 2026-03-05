const express = require('express');
const app = express();
let port = 4000;
app.use(express.json());


const bookRouter = require('./routes/book');


app.use('/books', bookRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});