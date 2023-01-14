const express = require('express');
const { connectDb } = require('./connect');
const config = require('./config');
const app = express();
const route = require('./routes/routes');

app.listen(config.PORT, config.HOST_NAME, () => {
    console.log(`Server is running on : ${config.HOST_NAME}:${config.PORT}`);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();

app.use(route);
