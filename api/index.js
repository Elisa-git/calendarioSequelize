const express = require('express');
const bodyParser = require('body-parser');
const { json, append } = require('express/lib/response');
const res = require('express/lib/response');
const reservas = require('./controller/ReservaController.js');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(bodyParser.json());

const port = 3000;

app.get('/agendar', async (req, res) => {
    await reservas.pegAllReservas(req, res)
});

app.listen(port, () => console.log(`Conectado na porta ${port} :)`));

module.exports = app;