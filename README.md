# API TO DO APPLICATION
> Projeto de conclusão do modulo 3, proposto pela Resilia Educação, de criação de uma API para um aplicativo de TO DO (tarefas). 

## Como inicializar o projeto
- Primeiro clone este repositório em sua maquina usando os comandos em seu terminal `git clone https://github.com/thiago-tga/TODO_APP_API.git`
- Após ter clonado os arquivos para sua maquina, em seu terminal digite `npm install` para baixar as dependências do projeto e inicie a API digintando, ainda em seu terminal o comando `npm start.

## Rotas
O projeto está no formato API REST, utilizando 4 verbos HTTP `GET, POST, PUT, DELETE` para implementar as operações de CRUD. Nesta API os verbos fazem requisições em duas tabelas do banco de dados : `USUARIOS` e `TAREFAS`.
#### MÉTODO GET
- Para listar todos os usuários no banco de dados, utilize em seu testador de requisições o verbo `GET` junto a rota `localhost:8080/usuarios`. O retorno esperado deve ser um array com todos os usuários (json).

- Para consultar um usuário especifico no banco de dados, utilize em seu testador de requisições o verbo `GET` junto a rota `localhost:8080/usuarios/:email` e substitua o parâmetro `:email` pelo email do usuário que deseja encontrar. O retorno esperado deve ser um array com um único usuário.

- Para listar todas as tarefas no banco de dados, utilize em seu testador de requisições o verbo `GET` junto a rota `localhost:8080/tarefas`. O retorno esperado deve ser um array com todas as tarefas (json).

- Para consultar uma tarefa especifica no banco de dados, utilize em seu testador de requisições o verbo `GET` junto a rota `localhost:8080/tarefas/:status` e substitua o parâmetro `:status` pelo status `TODO, DOING ou Continuo` da tarefa que deseja encontrar. O retorno esperado deve ser um array com todas as tarefas referentes ao status desejado.
---
#### MÉTODO POST 
- Para inserir um usuário no banco de dados, em seu testador de requisições, use o verbo `POST` junto a rota `localhost:8080/usuarios` e adicione os seguintes dados no corpo da requisição, no formato JSON:
```json
{
    "NOME": "Nome do Usuário",
    "EMAIL": "email_usuario@gmail.com",
    "SENHA": "senhausuario123*"
  }
```
- Para inserir uma tarefa no banco de dados, em seu testador de requisições, use o verbo `POST` junto a rota `localhost:8080/tarefas` e adicione os seguintes dados no corpo da requisição, no formato JSON:
```json
{
    "TITULO": "Titulo da tarefa",
    "DESCRICAO": "Descrição da tarefa",
    "STATUS": "Status da tarefa (TODO, DOING, CONTINUO)",
    "DATACRIACAO": "AAAA-MM-DD",
    "ID_USUARIO": 1
  }
```
---
#### MÉTODO PUT
- Para alterar um usuário no banco de dados, em seu testador de requisições, use o verbo `PUT` junto a rota `localhost:8080/usuarios/:email` e substitua o parâmetro `:email` pelo o email do usuário que deseja alterar. Os únicos campos alteráveis são `NOME` e `SENHA` e devem vir no corpo da requisição em formato JSON:
```json
{
	"NOME" : "Nome a ser alterado",
	"SENHA": "senha a ser alterada"
}
```
- Para alterar uma tarefa no banco de dados, em seu testador de requisições, use o verbo `PUT` junto a rota `localhost:8080/tarefa/:id` e substitua o parâmetro `:id` pelo o id da tarefa que deseja alterar. Os únicos campos alteráveis são `TITULO`, `DESCRICAO` e `STATUS` e devem vir no corpo da requisição em formato JSON:
```json
{
    "TITULO": "Titulo a ser alterado",
    "DESCRICAO": "Descrição a ser alterada",
    "STATUS": "Status a ser alterado (TODO,DOING, CONTINUO)"
 }
```
---
#### MÉTODO DELETE
- Para deletar um usuário no banco de dados, em seu testador de requisições, use o verbo `DELETE` junto a rota `localhost:8080/usuarios/:email` e substitua o parâmetro `:email` pelo email do usuário que deseja deletar.

- Para deletar uma tarefa no banco de dados, em seu testador de requisições, use o verbo `DELETE` junto a rota `localhost:8080/tarefas/:id` e substitua o parâmetro `:id` pelo id da tarefa que deseja deletar.
---
## Ferramentas utilizadas
- Express
- Body-Parser
- Sqlite3
- Nodemon (Dependência de desenvolvimento)
## Colaborador
<a href="https://github.com/thiago-tga"><img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQHR-AZMVpN9iA/profile-displayphoto-shrink_400_400/0/1610584257602?e=1616025600&v=beta&t=-nYa_s1xQjXgPNRmpIPf1EWWFsXH3Px7dHmpzEMj-2I" width="100px;" alt=""/><br /><sub><b>Thiago Gomes</b></sub>
      </a>
      <br />
      <a href="https://github.com/thiago-tga" title="GitHub">💻
      <a href="https://www.instagram.com/thiaguio/" title="instagram">📷
      <a href="https://www.linkedin.com/in/thiago-araujo-23761115a/" title="linkedin">💼
      </a>