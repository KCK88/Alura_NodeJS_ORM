const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router.get("/pessoas", PessoaController.pegaTodasAsPessoas)
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
router.post("/pessoas", PessoaController.criarPessoa)
router.put("/pessoas/:id", PessoaController.atualizaPessoa)
router.delete("/pessoas/:id", PessoaController.apagarPessoa)
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagarMatricula)

module.exports = router