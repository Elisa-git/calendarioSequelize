const database = require('../models');

class DisciplinaCont {
    static async pegaAllRegistrosDisciplinas(req, res) {
        try {
            const allRegistrosDisciplinas = await database.Disciplinas.findAll();
            return res.status(200).json(allRegistrosDisciplinas);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async pegaUmRegistroDisciplina(req, res) {
        const { id } = req.params;
        try {
            const umaDisciplina = await database.Disciplinas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaDisciplina);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async criaDisciplina(req, res) {
        const novaDisciplina = req.body;
        try {
            const novaDisciplinaCriada = await database.Disciplinas.create(novaDisciplina);
            return res.status(500).json(novaDisciplinaCriada);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async atualizaDisciplina(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Disciplinas.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const disciplinaAtualizada = await database.Disciplinas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(500).json(disciplinaAtualizada);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async deletaDisciplina(req, res) {
        const { id } = req.params;
        try {
            await database.Disciplinas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(500).json({ mensagem: `id ${id} deletado com sucesso!` });
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }
}

module.exports = DisciplinaCont;