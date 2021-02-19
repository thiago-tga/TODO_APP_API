module.exports = class usuariosDAO {
    constructor(bd){
        this._bd = bd;
    };
    listaUsuarios(){
        return new Promise ((resolve,reject)=>{
            this._bd.all("SELECT * FROM USUARIOS", (error,linhas)=>{
                if (error)
                {
                    reject("Erro ao consultar usuários");
                }
                else
                {
                    resolve(linhas);
                }
            })
        })
    };
    procuraUsuario(params){
        return new Promise ((resolve,reject)=>{
            this._bd.all(`SELECT * FROM USUARIOS WHERE EMAIL = (?);`,[params], (error,user) =>{
                if(error){
                    reject(error)
                }
                else{
                    resolve(user)
                }
            })

        })
    }; 
    insereUsuario(body){
        return new Promise ((resolve,reject)=>{
            this._bd.run(`INSERT INTO USUARIOS (NOME,EMAIL,SENHA) VALUES (?,?,?);`,[body.NOME,body.EMAIL,body.SENHA], (error)=>{
                if(error){
                    reject("Erro ao inserir usuário");
                }
                else{
                    resolve("Usuário adicionado");
                }
            })

        })
    }; 
    alteraUsuario(body,params)
    {
        return new Promise ((resolve,reject)=>{
            this._bd.run(`UPDATE USUARIOS SET NOME = (?), SENHA = (?) WHERE EMAIL = (?);`,[body.NOME,body.SENHA,params], (error)=>{
                if(error){
                    reject("Erro ao inserir usuario")
                }
                else{
                    resolve("Usuário alterado")
                }
            })
        })
    };  
    deletaUsuario(params){
        return new Promise((resolve,reject)=>{
            this._bd.run(`DELETE FROM USUARIOS WHERE EMAIL = ?;`,[params],(error)=>{
                if(error){
                    reject(error)
                }
                else{
                    resolve("Usuário deletado com sucesso")
                }
            })
        })
    };
};
