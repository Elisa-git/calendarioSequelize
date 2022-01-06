const Router = require("express");
const LocalCont = require('../controller/LocalCont');

const router = Router()

router
    // .get('/reservas', async (req, res) => { res.render('index') })
    .get('/locais', LocalCont.pegaAllRegistrosLocais)
    .get('/locais/:id', LocalCont.pegaUmRegistroLocal)
    .post('/locais', LocalCont.criaLocal)
    .put('/locais/:id', LocalCont.atualizaLocal)
    .delete('/locais/:id', LocalCont.deletaLocal)

module.exports = router;