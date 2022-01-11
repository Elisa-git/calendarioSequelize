const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 8080;

app.set('view engine', 'ejs');      //Indica ao express que será usado o ejs como engine
app.use(cors());
routes(app);

app.use(express.static("public")); 

app.listen(port, () => console.log(`Conectado na porta ${port} :)`));

module.exports = app;