const userRepository = require("../repositores/users")

const getUsers = () => {
    return userRepository.getUsers();
}

const getUsersById = (idUser) => {
    user = userRepository.getUsersById(idUser);
    if(!user){
        return null;
    }
    return user;
}

const createUser = (body) => {
    return userRepository.createUser(body);
}

const deleteUser = (id) => {
    return userRepository.deleteUser(idUser);
}

const updateUser = (id, body) =>{
    return userRepository.updateUser(idUser, body);
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}