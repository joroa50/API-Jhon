let usuarios = [ 
    { id: 1, nombre: "Juan"},
    { id: 2, nombre: "Maria"},
    { id: 3, nombre: "Pedro"} // Esta parte se remplaza con mongoose o sql //
];

exports.getUsuarios = () => usuarios;

exports.getUsuariosByID = (id) => usuarios.find(u => u.id === id);

exports.crearUsuario = (usuario) => {
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
    return usuario;
}

exports.actualizarUsuario = (id, usuarioActualizado) => { 
    const usuariosIndex = usuarios.findIndex(u = u.id === id);
    if (usuarioIndex === -1){
        return null;
    }
    usuarios[usuarioIndex] ={...usuarios[usuarioIndex], ...usuarioActualizado};
    return usuarios[usuarioIndex];
}

exports.eliminarUsuario =(id) => {
    usuarios = usuarios.filter(u =u.id !== id);
}

// https://www.youtube.com/watch?v=FIgPasNN23M&ab_channel=IsolateVC //
// https://www.youtube.com/watch?v=wqlQokp-eIE&ab_channel=IsolateVC//
