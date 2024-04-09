// Import express module.
const express = require('express');
// Import environment module and inititalize the configuratoin.
const dotenv = require('dotenv').config();
// initialize the express app.
const app = express();
const port = 3000;

require('./src/db/conn');

app.use(express.json());

app.use('/api', require('./src/routes/auth/register'));
app.use('/api', require('./src/routes/auth/login'));
app.use('/api', require('./src/routes/category/category'));
app.use('/api', require('./src/routes/product/product'));
app.use('/api', require('./src/routes/cart/cart'));
app.use('/api', require('./src/routes/order/order'));

app.listen(port, () => {
    console.log(`E-comm running on http://localhost:${port}/`);
});

