const Router = require("express");
const LocalCont = require('../controller/LocalCont');

const router = Router()

router
    .get('/locais', async (req, res) => { 
        const locais = await LocalCont.pegaAllRegistrosLocais()
        res.render('locais', { locais })
    })
    
    .get('/locais/:id', LocalCont.pegaUmRegistroLocal)
    
    .post('/locais', async (req, res) => {
        await LocalCont.criaLocal(req, res)
    })
    
    .put('/locais/:id', async (req, res) => {
        await LocalCont.atualizaLocal(req, res) 
    })
    
    .delete('/locais/:id', async (req, res) => {
        await LocalCont.deletaLocal(req, res)
    })

module.exports = router;