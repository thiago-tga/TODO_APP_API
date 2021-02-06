const express = require("express");
const bodyParser = require ("body-parser");
const controllerTarefas = require("./controllers/controller-tarefas");
const controllerUsuarios = require("./controllers/controller-usuarios");
const port = 8080;
const app = express();


app.use(bodyParser.json());



app.listen(port,()=>{
    console.log(`Url Configurada. Testar em localhost:${port}`)
})