const Router = require("express");
const EspecializacaoCont = require('../controller/EspecializacaoCont');
const PilarCont = require('../controller/PilarCont');

const router = Router();

router 
    .get('/especializacoes', async (req, res) => { 
        const especializacoes = await EspecializacaoCont.pegaAllRegistrosEspecializacoes()
        const pilares = await PilarCont.pegaAllRegistrosPilares()
        res.render('especializacoes', { especializacoes, pilares })
    })
    .get('/especializacoes/:id', EspecializacaoCont.pegaUmRegistroEspecializacao)
    .post('/especializacoes', EspecializacaoCont.criaEspecializacao)
    .put('/especializacoes/:id', EspecializacaoCont.atualizaEspecializacao)
    .delete('/especializacoes/:id', EspecializacaoCont.deletaEspecializacao)

module.exports = router;