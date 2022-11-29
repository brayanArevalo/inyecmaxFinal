const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicamnetosSchema = Schema({
    nombre:{type: String, required: true, max:60},
    numero_lote:{type: String, required: true, max:40},
    fecha_vencimiento:{type: String, required: false, max:15},
    laboratorio:{type: String, required: false, max:70}

});

module.exports = mongoose.model("medicamentos", MedicamnetosSchema);