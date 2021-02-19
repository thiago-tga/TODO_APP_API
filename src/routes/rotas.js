const controllerTarefas = require("../controllers/tarefas/tarefas");
const controllerUsuario = require("../controllers/usuarios/usuarios");

module.exports = (app) =>{
    app.get("/usuarios", controllerUsuario.listarUsuarios());

    app.get("/usuarios/:email", controllerUsuario.procurarUsuarios());

    app.post("/usuarios", controllerUsuario.inserirUsuario());

    app.put("/usuarios/:email", controllerUsuario.alterarUsuario());

    app.delete("/usuarios/:email",controllerUsuario.deletarUsuario());

    app.get("/tarefas",controllerTarefas.listarTarefas());
    
    app.get("/tarefas/:status",controllerTarefas.procurarTarefasStatus());

    app.post("/tarefas",controllerTarefas.inserirTarefas());

    app.put("/tarefas/:id",controllerTarefas.alterarTarefas());

    app.delete("/tarefas/:id",controllerTarefas.deletarTarefa());
}
