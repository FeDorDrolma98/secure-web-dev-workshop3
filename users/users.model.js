//mongoose.connect('mongodb+srv://root:root@cluster0.3q3r3ak.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connecté')).catch((e)=>console.log(e));
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Hacher le mot de passe avant de l'enregistrer
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

// Vérifier si le mot de passe fourni correspond au mot de passe hashé
userSchema.methods.isValidPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) { return callback(err); }
        callback(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;