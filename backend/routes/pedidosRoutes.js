const express = require('express')
const router = express.Router()

const { deletePedido, getPedido, crearPedido, updatePedido} = require('../controllers/pedidosController')

router.route('/').get(getPedido).post(crearPedido)
//router.get('/', protect, getTareas)
//router.post('/', protect, crearTareas)

router.route('/:id').delete(deletePedido).put(updatePedido)
//router.put('/:id', protect, updateTareas)
//router.delete('/:id', protect, deleteTareas)

module.exports = router