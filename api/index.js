const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
const res = require('express/lib/response');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/agendar', (req, res) => res
    .status(200)
    .send({mensagem:'Conectado!'})
);

app.listen(port, () => console.log(`Conectado na porta ${port} :)`));

module.exports = app;