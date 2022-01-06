const Router = require("express");
const DisciplinaCont = require('../controller/DisciplinaCont');

const router = Router();

router
    // .get('/disciplinas', async (req, res) => {
    //     const disciplinas = await DisciplinaCont.pegaAllRegistrosDisciplinas()
    //     res.render('disciplinas', { disciplinas })
    // })         //Renderizar
    .get('/disciplinas', DisciplinaCont.pegaAllRegistrosDisciplinas)
    .get('/disciplinas/:id', DisciplinaCont.pegaUmRegistroDisciplina)
    .post('/disciplinas', DisciplinaCont.criaDisciplina)
    .put('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .delete('/disciplinas/:id', DisciplinaCont.deletaDisciplina)

module.exports = router;