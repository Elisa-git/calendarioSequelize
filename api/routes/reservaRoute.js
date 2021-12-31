const { Router } = require('express');
const ReservaController = require('../controller/ReservaController');

const router = Router();

router.get('/reservar', ReservaController.pegAllReservas);

module.exports = router;