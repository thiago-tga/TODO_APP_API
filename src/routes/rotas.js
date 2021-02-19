const controllerUsuario = require("../controllers/usuarios/usuarios");

module.exports = (app) =>{
    app.get("/usuarios", controllerUsuario.listarUsuarios());

    app.get("/usuarios/:email", controllerUsuario.procurarUsuarios());

    app.post("/usuarios", controllerUsuario.inserirUsuario());

    app.put("/usuarios/:email", controllerUsuario.alterarUsuario());

    app.delete("/usuarios/:email",controllerUsuario.deletarUsuario());
}
