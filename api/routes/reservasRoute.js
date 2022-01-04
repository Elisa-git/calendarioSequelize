const Router = require("express");
const ReservaCont = require('../controller/ReservaCont');

const router = Router();

router
    .get('/reservas', ReservaCont.pegaAllRegistrosReservas)
    .get('/reservas/:id', ReservaCont.pegaUmRegistroReserva)
    .post('/reservas', ReservaCont.criaReserva)
    .put('/reservas/:id', ReservaCont.atualizaReserva)
    .delete('/reservas/:id', ReservaCont.deletaReserva)

module.exports = router;