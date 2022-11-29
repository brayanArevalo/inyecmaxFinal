const Medicamento = require("../models/medicamentos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let medicamento = new Medicamento({
        nombre: req.body.nombre,
        numero_lote: req.body.numero_lote,
        fecha_vencimiento: req.body.fecha_vencimiento,
        laboratorio: req.body.laboratorio,
      

    })

    medicamento.save(function(err){
        if(err){
        console.log = false,
        response.exito = false,
        response.msg = "Error al aguardar el producto"
        res.json(response)
        return;
        }

        response.exito = true,
        response.msg = "El prodcuto se guardo correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Medicamento.find(function(err, medicamentos){
        res.json(medicamentos)
    })
}

exports.findOne = function(req,res){
    Medicamento.findOne({_id: req.params.id},function(err, medicamento){
        res.json(medicamento)
    })
}

exports.update = function(req,res){
    let medicamento = {
        nombre: req.body.nombre,
        numero_lote: req.body.numero_lote,
        fecha_vencimiento: req.body.fecha_vencimiento,
        laboratorio: req.body.laboratorio,
      
    }

Medicamento.findByIdAndUpdate(req.params.id, {$set: medicamento}, function(err){
    if(err){
        console.error(err),
        response.exito = false,
        response.msg = "Error al modificar el producto"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El producto modifico correctamente"
    res.json(response)
})
}

exports.remove = function(req,res){
    Medicamento.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se eliminado correctamente"
        res.json(response)
    })
}
