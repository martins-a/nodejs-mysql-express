const express = require('express');
const app = express();

const exampleRoute = require('./routes/example');

app.use('/example', exampleRoute);

app.use((req, res, next) => {

    res.status(200).send({
        mensagem: 'Api works..'
    });

});

module.exports = app;