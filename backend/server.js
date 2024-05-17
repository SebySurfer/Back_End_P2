const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const cors = require('cors');

connectDB()

const port = process.env.PORT || 6000

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/pedidos', require('./routes/pedidosRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
