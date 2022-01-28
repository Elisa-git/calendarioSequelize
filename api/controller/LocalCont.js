const database = require('../models')

class LocalCont {
    static async pegaAllRegistrosLocais(req, res) {
        try {
            const allRegistrosLocais = await database.Locais.findAll({ raw: true, order: [['nomeLocal', 'ASC']] });
            // return res.status(200).json(allRegistrosLocais);
            return allRegistrosLocais;
        } catch (error) {
            // return res.status(500).json({mensagem: error});
            return error.message;
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
            // return res.status(200).json(umLocal);
            return umLocal;
        } catch (error) {
            // return res.status(500).json({mensagem: error});
            return error.message;
        }
    }

    static async criaLocal(req, res) {
        const novoLocal = req.body;

        try {
            const novoLocalCriado = await database.Locais.create(novoLocal);
            return res.status(200).json({ message: "Criado com sucesso!" });
            // return novoLocalCriado;
        } catch (error) {
            return res.status(500).json({mensagem: error});
            // return error.message;
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
            return res.status(200).json({ message: "Atualizado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ mensagem: error });
        }
    }

    static async deletaLocal(req, res) {
        const { id } = req.params;
        console.log(id);
        try {
            await database.Locais.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message })
            // return error.message
        }
    }
}

module.exports = LocalCont;