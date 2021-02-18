const usuariosDAO = require("../../DAO/usuarios/usuarios-DAO");
const bd = require("../../infra/sqlite-db");
const usuarios = new usuariosDAO (bd);

class controllerUsuario {

};
module.exports = controllerUsuario;