const database = require('../models')

class ReservaCont {
    static async pegaAllRegistrosReservas(req, res) {
        try {
            const allRegistrosReservas = await database.Reservas.findAll();
            return res.status(200).json(allRegistrosReservas);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async pegaUmRegistroReserva(req, res) {
        const { id } = req.params;
        try {
            const umaReserva = await database.Reservas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaReserva);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async criaReserva(req, res) {
        const novaReserva = req.body;
        try {
            const novaReservaCriada = await database.Reservas.create(novaReserva);
            return res.status(200).json(novaReservaCriada);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async atualizaReserva(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Reservas.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const reservaAtualizada = await database.Reservas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(reservaAtualizada);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async deletaReserva(req, res) {
        const { id } = req.params;
        try {
            await database.Reservas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(`id ${id} deletado com sucesso!`);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

}

module.exports = ReservaCont;