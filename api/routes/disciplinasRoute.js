const Router = require("express");
const express = require('express')
const DisciplinaCont = require('../controller/DisciplinaCont');
const PilarCont = require('../controller/PilarCont');
const Disciplina = require('../index')
const router = Router();
const bodyParser = require('body-parser')

router
    .set('view engine', 'ejs')
    .use(express.static("public"))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .get('/disciplinas', async (req, res) => {
        const pilares = await PilarCont.pegaAllRegistrosPilares()
        const disciplinas = await DisciplinaCont.pegaAllRegistrosDisciplinas()
        res.render('disciplinas', { disciplinas, pilares })
    })
    .get('/todasdisciplinas', DisciplinaCont.pegaAllRegistrosDisciplinas)
    .get('/disciplinas/:id', DisciplinaCont.pegaUmRegistroDisciplina)
    .post('/disciplinas', DisciplinaCont.criaDisciplina)
    .put('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .delete('/disciplinas/:id', DisciplinaCont.deletaDisciplina)
    .post('/disciplinas/apagar', (req, res) => {
        var id = req.body.id

                Disciplina.destroy({
                    where: {
                        id: id
                    }
                }).then(() => {
                    res.redirect('/disciplinas')
                })

            
        })
        .post('/disciplinas', async (req, res) => {
        var pilares_id = req.body.pilares_id
        var nomeDisciplina = req.body.nomeDisciplina;
        //requisição bodyparser pelo name dos input/selects

        await Disciplina.create({   //INSERT dados no BD
            nomeDisciplina: nomeDisciplina,
            pilares_id: pilares_id
        })
        res.redirect('/disciplinas')
    })


module.exports = router;