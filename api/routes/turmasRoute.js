const Router = require("express");
const TurmaCont = require('../controller/TurmaCont');
const EspecializacaoCont = require('../controller/EspecializacaoCont');

const router = Router();

router
    .get('/turmas', async (req, res) => { 
        const turmas = await TurmaCont.pegaAllRegistrosTurmas()
        const especializacoes = await EspecializacaoCont.pegaAllRegistrosEspecializacoes()
        console.log(turmas);
        res.render('turmas', { turmas, especializacoes })
    })
    .get('/todasturmas', TurmaCont.pegaAllRegistrosTurmas)
    .get('/turmas/:id', TurmaCont.pegaUmRegistroTurma)
    .post('/turmas', TurmaCont.criaTurma)
    .put('/turmas/:id', TurmaCont.atualizaTurma)
    .delete('/turmas/:id', TurmaCont.deletaTurma)
    
module.exports = router;