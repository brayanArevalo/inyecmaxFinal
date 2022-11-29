const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProvedoresSchema = Schema({
    empresa:{type: String, required: true, max:60},
    nit:{type: String, required: true, max:40},
    telefono:{type: String, required: false, max:15},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150}
});

module.exports = mongoose.model("provedores", ProvedoresSchema);