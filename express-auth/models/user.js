const { Schema, model } = require('mongoose')

const userSchema = Schema({
    name: {
        type: String,
        required: [true, '**** Db: El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, '**** Db: El email es requerido']
    },
    password: {
        type: String,
        required: [true, '**** Db: La contraseña es requerida']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true
    }
});

module.exports = model('User', userSchema);