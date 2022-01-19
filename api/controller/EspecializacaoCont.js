const database = require('../models');

class EspecializacaoCont {

    static async pegaAllRegistrosEspecializacoes(req, res) {
        try {
            const allRegistrosEspecializacoes = await database.Especializacoes.findAll({
                include: [{
                    model: database.Pilares
                }]
            });
            return allRegistrosEspecializacoes;
            // return res.status(200).json(allRegistrosEspecializacoes); 
        } catch (error) {
            // return res.status(500).json({ mensagem: error });
            return error.message;
        }
    }

    static async pegaUmRegistroEspecializacao(req, res) {
        const { id } = req.params;
        try {
            const umaEspecializacao = await database.Especializacoes.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaEspecializacao);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    static async criaEspecializacao(req, res) {
        const novaEspecializacao = req.body;
        try {
            const novaEspecializacaoCriada = await database.Especializacoes.create(novaEspecializacao);
            return res.status(200).json({ message: 'Capacitação criada :)'});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error });
        }
    }

    static async atualizaEspecializacao(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Especializacoes.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const especializacaoAtualizada = await database.Especializacoes.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(especializacaoAtualizada);
            // return especializacaoAtualizada;

        } catch (error) {
            return res.status(500).json({ mensagem: error });
            // return error.message;
        }
    }

    static async deletaEspecializacao(req, res) {
        const { id } = req.params;
        try {
            await database.Especializacoes.destroy({
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

module.exports = EspecializacaoCont;