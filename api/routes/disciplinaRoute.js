const { Router } = require("express");
const DisciplinaController = require('../controller/DisciplinaController');

const router = Router();

// router.get('/disciplina', DisciplinaController.pegAllDisciplinas);
router.post('/disciplina/:id', async (req, res) => {
    const id  = Number(req.params.id);
    await DisciplinaController.buscaPorId(id, res);
})

router.post("/criarDisciplina", async (req, res) => {
    const info = req.body
    const disciplina = new DisciplinaController(info)
    await disciplina.criar(req, res)
})
module.exports = router;