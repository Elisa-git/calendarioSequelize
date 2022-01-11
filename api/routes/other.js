const Router = require("express");

const router = Router()

router
    .get('/', async (req, res) => { res.render('home') })
    .get('/calendario', async (req, res) => { res.render('calendario') })

module.exports = router;