const express = require('express');
const app = express();
const programRouter = require('./api/router/program')
const kategoriRouter = require('./api/router/kategoriProgram')
app.use('/', programRouter)
app.use('/kategoriprogram', kategoriRouter)

module.exports = app;