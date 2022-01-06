const Router = require("express");
const InstrutorConst = require('../controller/InstrutorCont');

const router = Router();

router
    // .get('/reservas', async (req, res) => { res.render('') })
    .get('/instrutores', InstrutorConst.pegaAllRegistrosInstrutores)
    .get('instrutores/:id', InstrutorConst.pegaUmRegistroInstrutor)
    .post('instrutores/:id', InstrutorConst.criaInstrutor)
    .put('instrutores/:id', InstrutorConst.atualizaInstrutor)
    .delete('instrutores/:id', InstrutorConst.deletaInstrutor)

module.exports = router;