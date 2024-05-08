const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const { deletePedido, getPedido, crearPedido, updatePedido} = require('../controllers/tareasController')

router.route('/').get(protect, getPedido).post(protect, crearPedido)
//router.get('/', protect, getTareas)
//router.post('/', protect, crearTareas)

router.route('/:id').delete(protect, deletePedido).put(protect ,updatePedido)
//router.put('/:id', protect, updateTareas)
//router.delete('/:id', protect, deleteTareas)

module.exports = router