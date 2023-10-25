const express = require('express')
const app = express()
const port = 3000  //porta onde esta as informações
app.use(express.json());

let bd = [
    {
        id: '1', //adiciona um valor a variavel id
        name: 'Felippe' //adiciona um valor a variavel id
    },
    {
        id: '2',
        name:'Bruna'
    }
] //variavel onde os objetos estão

//get users
app.get('/users', (request, response) => {//pega algumas informação
  response.json(bd); //resposta, local de onde essas informações serão consultada.
})

app.get('/users/:id', (request, response) => {//pesquisar um id especifico
    //pegar o id da requisição
    const idUser = request.params.id;
    //encontrar o usuario correspondente no db
    const user = bd.filter((usuario) => usuario.id === idUser);

    //responder a requisição com as info do users
    response.json(user);

}) //encontrar as pessoas pelo id

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//Fica esperando o comando

app.post('/users', (request, response) =>{
    //Pegar o corpo da requisição
    const body = request.body;

    //Criar um novo obj a partir desse corpo
    const newUser = {
        id:(bd.length + 1).toString(), //faz a contagem de usuario, adciona mais 1 a lista e depois transforma em texto
        name: body.name
    }

    //Adicionar esse obj no banco
    bd.push(newUser);

    //Responder a requisição com o bando completo
    response.json(bd);
})//adiciona um novo usuario

app.delete("/users/:id", (request, response) =>{
    //pegar o id da requisição
    const idUser = request.params.id;

    //percorrer o banco e encontrar quem tem o id da requisição
    bd = bd.filter((usuario) => usuario.id != idUser);

    //responder com o meu banco atualizado
    response.json(bd);
}) // remover um usuario do bd

app.patch("/users/:id", (request, response) =>{
    //Pegar o id da requisição
    const idUser = request.params.id;
    console.log(idUser);

    //pegar o corpo da reqisição
    const body = request.body;
    console.log(body);

    //percorrer o banco
    bd = bd.map((usuario) => {
        if(usuario.id === idUser){ 
            //atualizar as informações
            usuario.name = body.name;
        }

        return usuario;
    })

    //responder a requisição com o banco
    response.json(bd);
})