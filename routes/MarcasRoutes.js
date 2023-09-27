const {Router} = require('express')
const MarcaController = require('../controllers/MarcaController')
const VersaoController = require('../controllers/VersaoController')
const router = Router()

router.get('/marcas/', MarcaController.listaTodasMarcas)
router.get('/marcas/busca', MarcaController.listaComFiltro)
router.put('/marcas/:id', MarcaController.alteraMarca)
router.post('/marcas/', MarcaController.cadastraMarca)
router.post('/versao/', VersaoController.cadastraversao)

module.exports = router