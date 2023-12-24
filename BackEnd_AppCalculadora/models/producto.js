const mongoose = require('mongoose');
const Compania = require('./compania');
const { Schema } = mongoose;

const ProductoSchema = new Schema ({
    nombre: {type: String, required: true},
    precios: [{
        compania: {type: Schema.Types.ObjectId, ref: Compania},
        precio: {type: Number},
    }],
    imagen: {type: String, required: true},
})

module.exports = mongoose.model('Producto', ProductoSchema);