const database = require('../models');

class ReservaController {
    static async pegAllReservas(req, res) {
        try {
            const allReservas = await database.Reservas.findAll();
            return res.status(200).json(allReservas);
        }
        catch(error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ReservaController;