const database = require('../models')

class PilarCont {
    static async pegaAllRegistrosPilares(req, res) {
        try {
            const allRegistrosPilares = await database.Pilares.findAll();
            return allRegistrosPilares;
        } catch (error) {
            return error.message;
        }
    }

    static async pegaUmRegistroPilares(req, res) {
        const { id } = req.params;
        try {
            const novoPilar = await database.Pilares.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(novoPilar);
        } catch (error) {
            return res.status(500).json({mensagem: error})
        }
    }

    static async criaPilar(req, res) {
        const novoPilar = req.body;
        console.log(novoPilar);
        try {
            const novoPilarCriado = await database.Pilares.create(novoPilar);
            // return res.status(200).json(novoPilarCriado);
            return novoPilarCriado
        } catch (error) {
            // return res.status(500).json({mensagem: error})
            return error.message
        }
    }

    static async atualizaPilar(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Pilares.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const pilarAtualizado = await database.Pilar.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pilarAtualizado);
        } catch (error) {
            return res.status(200).json({mensagem: error});
        }
    }

    static async deletaPilar(req, res) {
        const { id } = req.params;
        try {
            await database.Pilares.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!`}); 
        } catch (error) {
            return res.status(500).json({mensagem: error});
        }
    }
}

module.exports = PilarCont;