const Router = require("express");
const ReservaCont = require('../controller/ReservaCont');
const InstrutorConst = require('../controller/InstrutorCont');
const TurmaCont = require('../controller/TurmaCont');
const DisciplinaCont = require('../controller/DisciplinaCont');
const LocalCont = require('../controller/LocalCont');

const router = Router();

router
    .get('/reservas', async (req, res) => { 
        const instrutores = await InstrutorConst.pegaAllRegistrosInstrutores()
        const turmas = await TurmaCont.pegaAllRegistrosTurmas()
        const disciplinas = await DisciplinaCont.pegaAllRegistrosDisciplinas()
        const locais = await LocalCont.pegaAllRegistrosLocais()
        const reservas = await ReservaCont.pegaAllRegistrosReservas()
        console.log(reservas);

        res.render('reservas', { reservas, instrutores, turmas, disciplinas, locais })
    })
    // .get('/reservas', ReservaCont.pegaAllRegistrosReservas)
    .get('/reservas/:id', ReservaCont.pegaUmRegistroReserva)
    .post('/reservas', ReservaCont.criaReserva)
    .put('/reservas/:id', ReservaCont.atualizaReserva)
    .delete('/reservas/:id', ReservaCont.deletaReserva)

module.exports = router;