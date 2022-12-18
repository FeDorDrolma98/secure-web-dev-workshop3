// This file holds the Business-Logic layer, interacting with Data Layer
const control=require('./users.controller')
const userModel = require('./users.model');
const bcrypt =require('bcrypt')

async function register(username,password){
    const hash=await bcrypt.hash(password,10)
    const user=new userModel({username,password:hash})//45:54 du 28/11
    return await user.save()

}

// Pour utiliser users.model meme dans d'autres documents sans appeler directement users.model
function renvoiModel(){
    return userModel;
}

// Créer un nouvel utilisateur
const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        const user = new userModel(userData);
        user.save((err, savedUser) => {
            if (err) { return reject(err); }
            resolve(savedUser);
        });
    });
};

// Récupérer un utilisateur en fonction de son id
const getUserByID = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findOne(id, (err, user) => {
            if (err) { return reject(err); }
            resolve(user);
        });
    });
};

// Récupérer un utilisateur en fonction de son id
const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        userModel.findOne(username, (err, user) => {
            if (err) { return reject(err); }
            resolve(user);
        });
    });
};

// Mettre à jour un utilisateur en fonction de son username
const updateUserByID = (id, updates) => {
    const userToUpdate=getUserByID(id);
    return userToUpdate.updateUserByUsername(updates)
};

// Supprime un utilisateur
const deleteUser=(id)=>{
    return userModel.deleteOne(userModel.findOne(id))
}

// Pour trouver tous les utilisateurs
function findAll (callback){
    return this.find({},callback);
}


module.exports = {
    renvoiModel,
    createUser,
    getUserByID,
    getUserByUsername,
    updateUserByID,
    deleteUser,
    findAll
};
