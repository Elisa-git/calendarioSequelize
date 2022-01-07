const Router = require("express");
const TurmaCont = require('../controller/TurmaCont');

const router = Router();

router
    // .get('/turmas', async (req, res) => { 
    //     const turmas = await TurmaCont.pegaAllRegistrosTurmas()
    //     res.render('turmas', { turmas })
    // })
    .get('/turmas', TurmaCont.pegaAllRegistrosTurmas)
    .get('/turmas/:id', TurmaCont.pegaUmRegistroTurma)
    .post('/turmas', TurmaCont.criaTurma)
    .put('/turmas/:id', TurmaCont.atualizaTurma)
    .delete('/turmas/:id', TurmaCont.deletaTurma)
    
module.exports = router;