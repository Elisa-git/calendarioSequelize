const Router = require("express");
const PilarCont = require('../controller/PilarCont');

const router = Router();

router
    .get('/pilares', PilarCont.pegaAllRegistrosPilares)
    .get('/pilares/:id', PilarCont.pegaUmRegistroPilares)
    .post('/pilares', PilarCont.criaPilar)
    .put('/pilares/:id', PilarCont.atualizaPilar)
    .delete('/pilares/:id', PilarCont.deletaPilar)

module.exports = router;