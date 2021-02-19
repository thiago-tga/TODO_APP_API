class tarefasDAO {
    constructor(bd){
        this._bd = bd;
    };
    listaTarefas(){
        return new Promise ((resolve,reject)=>{
            this._bd.all(`SELECT * FROM TAREFAS;`,(error,linhas)=>{
                if(error){
                    reject("Erro ao encontrar tarefas");
                }
                else{
                    resolve(linhas);
                }
            });

        });
    };
    procuraTarefa(params){
        return new Promise ((resolve,reject)=>{
            this._bd.all(`SELECT * FROM TAREFAS WHERE STATUS = (?);`,[params],(error,linhas)=>{
                if(error){
                    reject("Erro ao encontrar tarefas");
                }
                else{
                    resolve(linhas)
                }
            });
        });
    };
    insereTarefa(body){
        return new Promise ((resolve,reject)=>{
            this._bd.run(`INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?);`,
            [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, body.ID_USUARIO],(error)=>{
                if(error){
                    reject("Erro ao inserir tarefa");
                }
                else{
                    resolve("Tarefa Adicionada!")
                }
            });
        });
    };
    alteraTarefa(params,body){
        return new Promise ((resolve,reject)=>{
            this._bd.run(`UPDATE TAREFAS SET TITULO=(?), DESCRICAO= (?),STATUS=(?) WHERE ID=(?);`,
            [body.TITULO, body.DESCRICAO, body.STATUS,params],(error)=>{
                if(error){
                    reject("Erro ao alterar sua tarefa")
                }
                else{
                    resolve("Tarefa alterada")
                }
            });
        });
    };
    deletaTarefa(params){
        return new Promise ((resolve,reject)=>{
            this._bd.run(`DELETE FROM TAREFAS WHERE ID = (?);`,[params],(error)=>{
                if(error){
                    reject("Erro ao deletar tarefa");
                }
                else{
                    resolve("Tarefa deletada com sucesso!")
                }
            });
        });
    };
    
};
module.exports = tarefasDAO;