const mongoose = require('mongoose');

const { Schema } = mongoose;

const CompaniaSchema = new Schema ({
    nombre: {type: String, required: true},
    direccion: {type: String, required: true},
})

module.exports = mongoose.model('Compania', CompaniaSchema);