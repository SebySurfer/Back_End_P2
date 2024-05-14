const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const register = asyncHandler( async (req, res) => {

    //desestructurar un objeto
    const {name, email, delivery_Adress, contact_Number} = req.body

    //verificar que me pasen los datos
    
    if (!name || !email || !delivery_Adress || !contact_Number) {
        res.status(400)
        throw new Error ('Faltan datos');
    }
    

    //verificar que el usuario no se repita
    const userExiste = await User.findOne({email})
    if(userExiste) {
        res.status(400)
        throw new Error('Ese usuario ya existe en la base de datos')
    }



    //crear el usuario
    const user = await User.create({
        name,
        email,
        delivery_Adress, 
        contact_Number

    })
    
    res.status(201).json(user)
})


const showdata = asyncHandler( async (req,res) => {
    res.status(200).json(req.user)
})

module.exports = {
    register,
    showdata
}




