const Router = require("express");
const InstrutorConst = require('../controller/InstrutorCont');
const PilarCont = require('../controller/PilarCont');

const router = Router();

router
    .get('/instrutores', async (req, res) => { 
        const instrutores = await InstrutorConst.pegaAllRegistrosInstrutores()
        const pilares = await PilarCont.pegaAllRegistrosPilares()
        res.render('instrutores', { instrutores, pilares })
    })    
    // .get('/instrutores', InstrutorConst.pegaAllRegistrosInstrutores)
    .get('/instrutores/:id', InstrutorConst.pegaUmRegistroInstrutor)
    .post('/instrutores', InstrutorConst.criaInstrutor)
    .put('/instrutores/:id', InstrutorConst.atualizaInstrutor)
    .delete('/instrutores/:id', InstrutorConst.deletaInstrutor)

module.exports = router;