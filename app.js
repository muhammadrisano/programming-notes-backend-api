const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        mesage: 'It works !'
    })
})

module.exports = app;