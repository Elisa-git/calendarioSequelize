const database = require('../models')

class LocalCont {
    static async pegaAllRegistrosLocais(req, res) {
        try {
            const allRegistrosLocais = await database.Locais.findAll();
            return res.status(200).json(allRegistrosLocais);
        } catch (error) {
            return res.status(500).json({mensagem: error});
        }
    }

    static async pegaUmRegistroLocal(req, res) {
        const { id } = req.params;
        try {
            const umLocal = await database.Locais.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umLocal);
        } catch (error) {
            return res.status(500).json({mensagem: error});
        }
    }

    static async criaLocal(req, res) {
        const novoLocal = req.body;
        try {
            const novoLocalCriado = await database.Locais.create(novoLocal);
            return res.status(200).json(novoLocalCriado);
        } catch (error) {
            return res.status(500).json({mensagem: error});
        }
    }

    static async atualizaLocal(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Locais.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const localAtualizado = await database.Locais.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(localAtualizado);
        } catch (error) {
            return res.status(500).json({mensagem: error});
        }
    }

    static async deletaLocal(req, res) {
        const { id } = req.params;
        try {
            await database.Locais.destroy({
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

module.exports = LocalCont;