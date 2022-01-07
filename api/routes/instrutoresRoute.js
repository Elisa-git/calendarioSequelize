const Router = require("express");
const InstrutorConst = require('../controller/InstrutorCont');

const router = Router();

router
    .get('/instrutores', async (req, res) => { 
        const instrutores = await InstrutorConst.pegaAllRegistrosInstrutores()
        res.render('instrutores', { instrutores })
    })    
    // .get('/instrutores', InstrutorConst.pegaAllRegistrosInstrutores)
    .get('instrutores/:id', InstrutorConst.pegaUmRegistroInstrutor)
    .post('instrutores', InstrutorConst.criaInstrutor)
    .put('instrutores/:id', InstrutorConst.atualizaInstrutor)
    .delete('instrutores/:id', InstrutorConst.deletaInstrutor)

module.exports = router;