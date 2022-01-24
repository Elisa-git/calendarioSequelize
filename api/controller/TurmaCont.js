const database = require('../models')

class TurmasCont {
    static async pegaAllRegistrosTurmas(req, res) {
        try {
            const allRegistrosTurmas = await database.Turmas.findAll({
                include: [{
                    model: database.Especializacoes
                }]
            });
            // return res.status(200).json(allRegistrosTurmas);
            return allRegistrosTurmas;
        } catch (error) {
            // return res.status(500).json(error.message);
            return error.message;
        }
    }

    static async pegaUmRegistroTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return umaTurma;
        } catch (error) {
            return error.message;
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
            // return novaTurmaCriada;
        } catch (error) {
            return res.status(500).json(error.message);
            // return error.message;
        }
    }

    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Turmas.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return turmaAtualizada;
        } catch (error) {
            return error.message;
        }
    }

    static async deletaTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
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

module.exports = TurmasCont;