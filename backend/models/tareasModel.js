const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    pedido: {
        type: String,
        required: [true, "Por favor teclea cual es el fidget spinner que quieres"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', pedidoSchema)