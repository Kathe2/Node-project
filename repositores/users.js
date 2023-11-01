let {bd} = require('../database/users')

const getUsers = () => {
    return bd;
}

const getUsersById = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);
}



const createUser = (body) => {
    const newUser = {
        id: (bd.length + 1).toString(), //faz a contagem de usuario, adciona mais 1 a lista e depois transforma em texto
        name: body.name
    }

    //Adicionar esse obj no banco
    bd.push(newUser);
    return newUser;

}

const deleteUser = (idUser) => {
    bd = bd.filter((usuario) => usuario.id != idUser);
    return null;

}

const updateUser = (idUser, body) => {
     //percorrer o banco
     //percorrer o banco
    bd = bd.map((usuario) => {
        if(usuario.id === idUser){ 
            //atualizar as informações
            usuario.name = body.name;
        }

        return usuario;
    })

    return bd;

}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}

