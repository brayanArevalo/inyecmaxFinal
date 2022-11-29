const Provedor = require("../models/provedores.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let provedor = new Provedor({
        empresa: req.body.empresa,
        nit: req.body.nit,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion

    })

    provedor.save(function(err){
        if(err){
        console.log = false,
        response.exito = false,
        response.msg = "Error al aguardar el provedor"
        res.json(response)
        return;
        }

        response.exito = true,
        response.msg = "El provedor se guardo correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Provedor.find(function(err, provedores){
        res.json(provedores)
    })
}

exports.findOne = function(req,res){
    Provedor.findOne({_id: req.params.id},function(err, provedor){
        res.json(provedor)
    })
}

exports.update = function(req,res){
    let provedor = {
        empresa: req.body.empresa,
        nit: req.body.nit,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

Provedor.findByIdAndUpdate(req.params.id, {$set: provedor}, function(err){
    if(err){
        console.error(err),
        response.exito = false,
        response.msg = "Error al modificar el provedor"
        res.json(response)
        return;
    }

    response.exito = true,
    response.msg = "El provedor se modifico correctamente"
    res.json(response)
})
}

exports.remove = function(req,res){
    Provedor.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el provedor"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El provedor se eliminado correctamente"
        res.json(response)
    })
}
