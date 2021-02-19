const usuariosDAO = require("../../DAO/usuarios/usuarios-DAO");
const bd = require("../../infra/sqlite-db");
const usuarios = new usuariosDAO (bd);

class controllerUsuario {
    static listarUsuarios(){
        return async (req,resp)=>{
            try{
                const listagemUsuarios = await usuarios.listaUsuarios();
                resp.send(listagemUsuarios);
            }
            catch (error){
                resp.send(error);
            }
            
        }
    };
    static procurarUsuarios(){
        return async (req,resp)=>{
            try{
                const email = req.params.email;
                const procuraUsuario = await usuarios.procuraUsuario(email);
                resp.send(procuraUsuario);
            }
            catch (error){
                resp.send(error);
            }
        }
    };
    static inserirUsuario(){
        return async (req,resp)=>{
            try{
                const novoUsuario = req.body;
                const insereUsuario = await usuarios.insereUsuario(novoUsuario);
                resp.send(insereUsuario)
            }
            catch(error){
                resp.send("Falha ao inserir usuário, confira os dados!")
            }
        }
    };
    static alterarUsuario(){
        return async (req,resp)=>{
            try{
                const usuarioAlterado = req.params.email;
                const alteracoes = req.body;
                const alteraUsuario = await usuarios.alteraUsuario(alteracoes,usuarioAlterado);
                resp.send(alteraUsuario);
            }
            catch(error){
                resp.send(error);
            }
        }

    };
    static deletarUsuario(){
        return async (req,resp)=>{
            try{
                const email = req.params.email;
                const  usuarioDeletado = await usuarios.deletaUsuario(email);
                resp.send(usuarioDeletado);
            }
            catch(error){
                resp.send(error);
            }
        }
    }

};
module.exports = controllerUsuario;