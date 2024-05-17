const express = require('express')
const router = express.Router()

const {register, showdata} = require('../controllers/userController')

router.post('/register', register)
router.get('/showdata', showdata)


module.exports = router