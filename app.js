const express = require('express')
const app = express()
const port = 3000  //porta onde esta as informações
app.use(express.json());
const userService = require('./services/users')

//get users
app.get('/users', (request, response) => {//pega algumas informação
  response.json(userService.getUsers()); //resposta, local de onde essas informações serão consultada.
})

app.get('/users/:id', (request, response) => {//pesquisar um id especifico
    //pegar o id da requisição
    const idUser = request.params.id;
    //responder a requisição com as info do users
    response.json(userService.getUsersById(idUser));

}) //encontrar as pessoas pelo id

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//Fica esperando o comando

app.post('/users', (request, response) =>{
    //Pegar o corpo da requisição
    const body = request.body;

    response.status(201).json(userService.createUser(body));
})//adiciona um novo usuario

app.delete("/users/:id", (request, response) =>{
    //pegar o id da requisição
    const idUser = request.params.id;
    response.json("Apagado com sucesso");
    //responder com o meu banco atualizado
  
}) // remover um usuario do bd

app.patch("/users/:id", (request, response) =>{
    //Pegar o id da requisição
    const idUser = request.params.id;
    console.log(idUser);
    //pegar o corpo da reqisição
    const body = request.body;
    console.log(body);
    //responder a requisição com o banco
    response.status(200).json("Alterado com sucesso");

})