const asyncHandler = require('express-async-handler')
const Pedido = require('../models/tareasModel')

const getPedido = asyncHandler( async (req, res) => {

    const pedido = await Pedido.find({user: req.user.id})
    res.status(200).json(pedido)
})

const crearPedido = asyncHandler( async (req,res) => {
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error('Por favor teclea tu pedido')
    }
    
    const pedido = await Pedido.create({
        descripcion : req.body.descripcion,
        user: req.user.id
    })

    res.status(201).json(pedido)

})

const updatePedido = asyncHandler( async (req, res) => {
    //buscamos la tarea que deseamos modificar
    const pedido = await Pedido.findById(req.params.id)

    if(!pedido) {
        res.status(404)
        throw new Error('El pedido no existe')
    }

    const pedidoUpdated = await Pedido.findByIdAndUpdate
    (req.params.id, req.body, {new: true})

    res.status(200).json(pedidoUpdated)
})

const deletePedido = asyncHandler(async (req, res) => {
     //buscamos la tarea que deseamos modificar
     const pedido = await Pedido.findById(req.params.id)

     if(!pedido) {
         res.status(404)
         throw new Error('El pedido no existe')
     }
 
    await Pedido.deleteOne(pedido) 
     
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getPedido,
    crearPedido, 
    updatePedido,
    deletePedido
}