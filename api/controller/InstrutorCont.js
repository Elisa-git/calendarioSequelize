const database = require('../models');

class InstrutorConst {
    static async pegaAllRegistrosInstrutores(req,res) {
        try {
            const allRegistrosInstrutores = await database.Instrutores.findAll();
            // return res.status(200).json(allRegistrosInstrutores);
            return allRegistrosInstrutores;
        } catch (error) {
            // return res.status(500).json({mensagem: error});
            return error.message;
        }
    }

    static async pegaUmRegistroInstrutor(req, res) {
        const { id } = req.params;
        try {
            const umInstrutor = await database.Instrutores.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umInstrutor);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async criaInstrutor(req, res) {
        const novoInstrutor = req.body;
        try {
            const novoInstrutorCriado = await database.Instrutores.create(novoInstrutor);
            return res.status(200).json(novoInstrutorCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async atualizaInstrutor(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Instrutores.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const intrutorAtualizado = await database.Instrutores.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(intrutorAtualizado);

        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async deletaInstrutor(req, res) {
        const { id } = req.params;
        try {
            await database.Instrutores.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` });
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }
}

module.exports = InstrutorConst; 