const Router = require("express");
const { redirect } = require("express/lib/response");
const LocalCont = require('../controller/LocalCont');

const router = Router()

router
    .get('/locais', async (req, res) => { 
        const locais = await LocalCont.pegaAllRegistrosLocais()
        res.render('locais', { locais })
    })
    // .get('/locais', LocalCont.pegaAllRegistrosLocais)
    .get('/locais/:id', LocalCont.pegaUmRegistroLocal)
    .post('/locais', async (req, res) => {
        const locais = await LocalCont.criaLocal()
        res.redirect('locais')
    })
    .put('/locais/:id', LocalCont.atualizaLocal)
    .delete('/locais/:id', async (req, res) => {
        const locais = await LocalCont.deletaLocal()
        res.redirect('locais')
    })

module.exports = router;