const mongoose = require ('mongoose');

const { Schema } = mongoose;

const PlanSchema = new Schema ({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
})

module.exports = mongoose.model('Plan', PlanSchema);