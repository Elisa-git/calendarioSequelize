const Router = require("express");
const ReservaCont = require("../controller/ReservaCont");
const LocalCont = require('../controller/LocalCont');

const router = Router()

router
    .get('/', async (req, res) => { 
        const reservas = await ReservaCont.pegaAllRegistrosReservas()
        const locais = await LocalCont.pegaAllRegistrosLocais()
        
        res.render('home', { reservas, locais } ) 
    })
    .get('/calendario', async (req, res) => { 
        const eventos = await ReservaCont.adapter()
        res.render('calendario', { eventos }) 
    })
    // .get('/teste', async (req, res) => { 
    //     const reservas = await ReservaCont.pegaAllRegistrosReservas()
    //     res.render('teste', { reservas } ) 
    // })

module.exports = router;