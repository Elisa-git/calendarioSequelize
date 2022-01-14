const database = require('../models')

class ReservaCont {
    static async pegaAllRegistrosReservas(req, res) {
        try {
            const allRegistrosReservas = await database.Reservas.findAll({
                include: [
                    {model:database.Instrutores},
                    {model:database.Turmas},
                    {model:database.Locais},
                    {model:database.Disciplinas}
                ]
            });
            return res.status(200).json(allRegistrosReservas)
            // return allRegistrosReservas;
        } catch (error) {
            return res.status(500).json({mensagem: error})
            // return error.message;
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
            return umaReserva;
        } catch (error) {
            return error.message;
        }
    }

    static async criaReserva(req, res) {
        const novaReserva = req.body;
        try {
            const novaReservaCriada = await database.Reservas.create(novaReserva);
            // return res.status(200).json(novaReservaCriada);
            return novaReservaCriada;
        } catch (error) {
            return error.message;
            // return res.status(500).json({mensagem: error});
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
            return reservaAtualizada;
        } catch (error) {
            return error.message;
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
            return json(`id ${id} deletado com sucesso!`);
        } catch (error) {
            return error.message;
        }
    }

}

module.exports = ReservaCont;