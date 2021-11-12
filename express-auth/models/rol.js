const { Schema, model } = require('mongoose')

const rolSchema = Schema({
    name: {
        type: String,
        required: [true, '**** Db: El rol es requerido']
    }
    
});

module.exports = model('Rol', rolSchema);