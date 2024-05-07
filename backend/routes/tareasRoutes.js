const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')

router.route('/').get(protect, getTareas).post(protect, crearTareas)
//router.get('/', protect, getTareas)
//router.post('/', protect, crearTareas)

router.route('/:id').delete(protect, deleteTareas).put(protect ,updateTareas)
//router.put('/:id', protect, updateTareas)
//router.delete('/:id', protect, deleteTareas)

module.exports = router