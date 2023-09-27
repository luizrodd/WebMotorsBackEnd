const {Router} = require('express')
const CarroController = require('../controllers/CarroController')


const router = Router()

router.get('/carros/', CarroController.listaTodosCarros)
router.get('/carros/busca', CarroController.listaBuscaCarro);
router.get('/carros/:id', CarroController.listaCarro)
router.post('/carros/', CarroController.cadastraCarro)
router.delete('/carros/:id', CarroController.deletaCarro)
router.put('/carros/:id', CarroController.alteraCarro)


module.exports = router
