const Router = require("express");
const EspecializacaoCont = require('../controller/EspecializacaoCont');

const router = Router();

router 
    .get('/especializacoes', async (req, res) => { 
        const especializacoes = await EspecializacaoCont.pegaAllRegistrosEspecializacoes()
        res.render('especializacoes', { especializacoes })
    })
    .get('/especializacoes/:id', EspecializacaoCont.pegaUmRegistroEspecializacao)
    .post('/especializacoes', EspecializacaoCont.criaEspecializacao)
    .put('/especializacoes/:id', EspecializacaoCont.atualizaEspecializacao)
    .delete('/especializacoes/:id', EspecializacaoCont.deletaEspecializacao)

module.exports = router;