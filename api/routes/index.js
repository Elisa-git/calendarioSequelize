const bodyParser = require('body-parser');
const pilares = require('./pilaresRoute');
const locais = require('./locaisRoute');
const disciplinas = require('./disciplinasRoute');
const instrutores = require('./instrutoresRoute');
const reservas = require('./reservasRoute');
const calendario = require('./other');
const turmas = require('./turmasRoute');
const especializacoes = require('./especializacoesRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pilares,
        locais,
        disciplinas,
        instrutores,
        reservas,
        calendario,
        turmas,
        especializacoes
    )
}


