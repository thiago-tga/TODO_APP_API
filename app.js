const express = require("express");
const bodyParser = require("body-parser");
const rotas = require("./src/routes/rotas");

const port = 8080;
const app = express();


app.use(bodyParser.json());

rotas(app);


app.listen(port, ()=>{
    console.log(`Tudo pronto. Testar em localhost: ${port}`)
});