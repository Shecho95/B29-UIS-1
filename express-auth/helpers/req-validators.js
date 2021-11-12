const User = require('../models/user');
const Rol = require('../models/rol');

const emailExist = async (email = '') =>{
    let user = await User.findOne( { email } );
    if(user){
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}

const rolExist = async (rol = '') =>{
    let rolInstance = await Rol.findOne( { rol } );
    if(!rolInstance){
        throw new Error(`El rol ${ rol } no existe`);
    }
}

const userByIdExists = async (id = '') => {
    let user = await User.findById(id);
    if(!user){
        throw new Error(`El id ${ id } no es un usuario`);
    }
}

module.exports = {
    emailExist,
    rolExist,
    userByIdExists
}
