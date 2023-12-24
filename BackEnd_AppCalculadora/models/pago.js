const mongoose = require('mongoose');
const Plan = require('./plan');
const Usuario = require('./usuario');

const { Schema } = mongoose;

const PagoSchema = new Schema ({
    monto: {type: Schema.Types.ObjectId, ref: Plan},
    emailUsuario: {type: Schema.Types.ObjectId, ref: Usuario},
    fechaPago: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('Pago', PagoSchema);