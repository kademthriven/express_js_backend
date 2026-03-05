const express = require('express');
const app = express();
let port = 4000;

const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');


app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});