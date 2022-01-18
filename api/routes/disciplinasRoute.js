const Router = require("express");
const express = require('express')
const DisciplinaCont = require('../controller/DisciplinaCont');
const PilarCont = require('../controller/PilarCont');
const Disciplina = require('../controller/DisciplinaCont')
const router = Router();
const bodyParser = require('body-parser')
const app = express()
const flash = require("connect-flash")
const session = require("express-session")
app
    .set('view engine', 'ejs')
    .use(express.static("public"))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(session({
        secret: "calendario",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())

    app.use((req, res, next) => {
        res.locais.sucess_msg = req.flash("sucess_msg")
        res.locais.error_msg = req.flash("error_msg")
        next()
    })

router.get('/disciplinas', async (req, res) => {
    const pilares = await PilarCont.pegaAllRegistrosPilares()
    const disciplinas = await DisciplinaCont.pegaAllRegistrosDisciplinas()
    res.render('disciplinas', { disciplinas, pilares })
})
    .get('/disciplinas', DisciplinaCont.pegaAllRegistrosDisciplinas)
    .get('/disciplinas/:id', DisciplinaCont.pegaUmRegistroDisciplina)
    .post('/disciplinas', DisciplinaCont.criaDisciplina)
    .put('/disciplinas/:id', DisciplinaCont.atualizaDisciplina)
    .delete('/disciplinas/:id', DisciplinaCont.deletaDisciplina)
router.post('/disciplinas/apagar', (req, res) => {
    Disciplina.remove({ _id: req.body.id }).then(() => {
        req.flash("success_msg", "Disciplina deletada")
        res.redirect("/disciplinas")
    }).catch((err) => {
        res.flash("error_msg", "Houve um erro ao deletar")
        res.redirect("/disciplinas")
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