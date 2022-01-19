const Router = require("express");
const DisciplinaCont = require('../controller/DisciplinaCont');
const PilarCont = require('../controller/PilarCont');

const router = Router();

router
    .get('/disciplinas', async (req, res) => {
        const pilares = await PilarCont.pegaAllRegistrosPilares()
        const disciplinas = await DisciplinaCont.pegaAllRegistrosDisciplinas()
        res.render('disciplinas', { disciplinas, pilares })
    })
    // .get('/disciplinas', DisciplinaCont.pegaAllRegistrosDisciplinas)
    .get('/disciplinas/:id', DisciplinaCont.pegaUmRegistroDisciplina)
    .post('/disciplinas', async (req, res) => {
        await DisciplinaCont.criaDisciplina(req, res)
    })
    .put('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .delete('/disciplinas/:id', DisciplinaCont.deletaDisciplina)

module.exports = router;