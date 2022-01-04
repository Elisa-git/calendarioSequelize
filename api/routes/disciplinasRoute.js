const Router = require("express");
const DisciplinaCont = require('../controller/DisciplinaCont');

const router = Router();

router
    .get('/disciplinas', DisciplinaCont.pegaAllRegistrosDisciplinas)
    .get('/disciplinas/:id', DisciplinaCont.pegaUmRegistroDisciplina)
    .post('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .put('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .delete('/disciplinas/:id', DisciplinaCont.deletaDisciplina)

module.exports = router;