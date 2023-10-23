const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

let bd = [
    {
        id: '1',
        name: 'Felippe'
    },
    {
        id: '2',
        name:'Bruna'
    }
] 

//get users
app.get('/users', (request, response) => {
  response.json(bd);
})

app.get('/users/:id', (request, response) => {
    //pegar o id da requisição
    const idUser = request.params.id;

    //encontrar o usuario correspondente no db
    const user = bd.filter((usuario) => usuario.id === idUser);

    //responder a requisição com as info do users
    response.json(user);

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/users', (request, response) =>{
    //Pegar o corpo da requisição
    const body = request.body;


    //Criar um novo obj a partir desse corpo
    const newUser = {
        id:(bd.length + 1).toString(),
        name: body.name
    }

    //Adicionar esse obj no banco
    bd.push(newUser);

    //Responder a requisição com o bando completo
    response.json(bd);
})

app.delete("/users/:id", (request, response) =>{
    //pegar o id da requisição
    const idUser = request.params.id;

    //percorrer o bancoe encontrar quem tem o id da requisição
    bd = bd.filter((usuario) => usuario.id != idUser);

    // deleta o condenado

    //responder com o meu banco atualizado
    response.json(bd);
})

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