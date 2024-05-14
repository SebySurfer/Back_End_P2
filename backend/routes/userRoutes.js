const express = require('express')
const router = express.Router()

const {login, register, showdata} = require('../controllers/userController')

router.post('/register', register)
router.get('/showdata', showdata)


module.exports = router