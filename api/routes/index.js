const bodyParser = require('body-parser');
const pilares = require('./pilaresRoute');
const locais = require('./locaisRoute');
const disciplinas = require('./disciplinasRoute');
const instrutores = require('./instrutoresRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pilares,
        locais,
        disciplinas,
        instrutores
    )
}


