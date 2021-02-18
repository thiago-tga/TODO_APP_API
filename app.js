const express = require("express");
const bodyParser = require("body-parser");
const controllerUsuario = require("./controllers/usuarios/usuarios");
const controllerTarefa = require("./controllers/tarefas/tarefas");
const bd = require("./infra/sqlite-db");

const port = 8080;
const app = express();


app.use(bodyParser.json());