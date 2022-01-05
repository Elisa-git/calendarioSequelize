const Router = require("express");

const router = Router()

router
    .get('/calendario', async (req, res) => { res.render('calendario') })

module.exports = router;