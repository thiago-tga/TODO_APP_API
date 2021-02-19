const tarefasDAO = require("../../DAO/tarefas/tarefas-DAO");
const bd = require("../../infra/sqlite-db");
const tarefas = new tarefasDAO (bd);

class controllerTarefas {
    static listarTarefas(){
        return async (req,resp)=>{
            try{
                const listaTarefas = await tarefas.listaTarefas();
                resp.send(listaTarefas);
            }
            catch(error){
                resp.send(error)
            }
        }
    };
    static procurarTarefasStatus(){
        return async(req,resp)=>{
            try{
                const status = req.params.status;
                const procuraTarefa = await tarefas.procuraTarefa(status);
                resp.send(procuraTarefa);
            }
            catch(error){
                resp.send(error);
            }
        }
    };
    static inserirTarefas(){
        return async (req,resp)=>{
            try{
                const tarefaDados = req.body;
                const insereTarefa = await tarefas.insereTarefa(tarefaDados);
                resp.send(insereTarefa);
            }
            catch(error){
                resp.send(error);
            }
        }
    };
    static alterarTarefas(){
        return async (req,resp)=>{
            try{
                const id = req.params.id;
                const body = req.body;
                const alteraTarefa = await tarefas.alteraTarefa(id,body);
                resp.send(alteraTarefa)
            }
            catch(error){
                resp.send(error)
            }
        }
    }
    static deletarTarefa(){
        return async (req,resp)=>{
            try{
                const id = req.params.id;
                const deletaTarefa = await tarefas.deletaTarefa(id);
                resp.send(deletaTarefa);
            }
            catch(error){
                resp.send(error)
            }
        }
    }

};
module.exports = controllerTarefas;