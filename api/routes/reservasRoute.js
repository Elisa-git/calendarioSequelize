const Router = require("express");
const ReservaCont = require('../controller/ReservaCont');

const router = Router();

router
    .get('/reservas', async (req, res) => { 
        const reservas = await ReservaCont.pegaAllRegistrosReservas()
        // res.render('reservas', { reservas })
        res.json(reservas)
    })
    // .get('/reservas', ReservaCont.pegaAllRegistrosReservas)
    .get('/reservas/:id', ReservaCont.pegaUmRegistroReserva)
    .post('/reservas', ReservaCont.criaReserva)
    .put('/reservas/:id', ReservaCont.atualizaReserva)
    .delete('/reservas/:id', ReservaCont.deletaReserva)

module.exports = router;