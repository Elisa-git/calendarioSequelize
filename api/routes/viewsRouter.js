const { Router } = require("express");
const router = Router();

//Rotas para renderizar a página

router.get('/disciplina', async (req, res) => {
    res.render('../api/views/disciplinas')
})

router.get('/calendario', async (req, res) => {
    res.render('../api/views/calendario')
})

router.get('/home', async (req, res) => {
    res.render('../api/views/index')
})

module.exports = router;