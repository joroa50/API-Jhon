// Se crean los controladores//
const usuarioServices = require("../bd/usuarioServices");

exports.getUsuarios = (req,res) => {
    const usuarios = usuarioServicies.getUsuarios();
    res.json(usuarios);

};

//GET por id//
exports.getUsuariosById = (req,res) => {
    const id = parseInt(req,params,id);
    const usuario = usuarioServices.getUsuariosById(id);
    if(!usuario) {
        return res.status(404) .json({ mensaje: "Usuario no encontrado"});
    }
    res.json(usuario);
};

// POST -Crear usuario
exports.crearUsuario = (req,res) => {
    const nuevoUsuario = req.body;
    const usuarioCreado = usuarioServices.crearUsuario(nuevoUsuario);
        res.status(201).json(usuarioCreado);
};

// PUT - Actualizar

exports.actualizarUsuario = (req,res )=> {
    const id = parseInt(req.params.id);
    const usuarioActualizado = usuarioServices.actualizarUsuario(id,req.body);
    if (!usuarioActualizado) {
        return res.status(404).json({mensaje: "Usuario no actualizado"});
    }
    res.json(usuarioActualizado);
}

//Delete - Eliminar usuario
exports.eliminarUsuario = (req,res) => {
    const id =parseInt(req.params.id);
    usuarioServices.eliminarUsuario(id);
    res.status(204).send();
};


