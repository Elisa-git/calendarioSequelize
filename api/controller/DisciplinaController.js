const { ThirdPartyDraggable } = require('fullcalendar');
const database = require('../models');

class DisciplinaController {

    constructor({disciplina, setor, turma}) {
        this.disciplina = disciplina;
        this.setor = setor;
        this.turma = turma
    }

    static async pegAllDisciplinas(req, res) {
        try {
            const allDisciplinas = await database.Disciplinas.findAll();
            return res.status(200).json(allDisciplinas);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscaPorId(id, res) {
        try {
            const disciplinas = await database.Disciplina.findAll({
                where: { id: id }
            })
            return res.status(200).json(disciplinas)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
    //     const sql = 

    //     conexao.query(sql, (erro, resultados) => {
    //         const atendimento = resultados[0]
    //         if(erro) {
    //             res.status(400).json(erro)
    //         }
    //         else {
    //             res.status(200).json(atendimento)
    //         }
    //     })
    // }

    async criar(req, res) {
        try {
            const novaDisciplina = await database.Disciplina.create({
                disciplina: this.disciplina,
                setor: this.setor,
                turma: this.turma
            })
            res.status(200).json(novaDisciplina)
        } catch (error) {
            return res.status(500).json({message: error.message})            
        }
    }

}

module.exports = DisciplinaController;