const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const cors = require('cors');

connectDB()

const port = process.env.PORT || 6000

const app = express()

const corsOptions = {
    origin: 'http://127.0.0.1:5500/User_Orders.html?name=Sebastian+W.&email=t67ftfhi%40gmail.com&delivery-address=7979rt&contact-number=6r856e#', // Replace this with the actual URL of your frontend
};
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/pedidos', require('./routes/pedidosRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
