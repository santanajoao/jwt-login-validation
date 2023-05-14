const express = require('express');
const cors = require('cors');
const { accountRouter } = require('./routers');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/account', accountRouter);

module.exports = app;
