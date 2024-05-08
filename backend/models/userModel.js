const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Por favor teclea tu password"]
    },
    esAdmin: {
        type: Boolean,
        default: false
    }, 
    
    delivery_Adress: {
        type: String, 
        required: [true, "Por favor teclea tu direccion completo para mandar el spinner"]
    }, 

    contact_Number: {
        type: Number,
        required: [true, "Por favor teclea tu numero de contacto por si se pierde el paquete"]
    }
    

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)