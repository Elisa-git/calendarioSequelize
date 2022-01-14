const Router = require("express");
const PilarCont = require('../controller/PilarCont');

const router = Router();

router
    .get('/pilares', async (req, res) => { 
        const pilares = await PilarCont.pegaAllRegistrosPilares()
        res.render('pilares', { pilares })
    })
    .get('/pilares/:id', PilarCont.pegaUmRegistroPilares)

    .post('/pilares', async (req, res) => {
        const pilares = await PilarCont.criaPilar(req, res)
        console.log(pilares);
        res.redirect('pilares')
    })

    .put('/pilares/:id', PilarCont.atualizaPilar)
    .delete('/pilares/:id', PilarCont.deletaPilar)

module.exports = router;