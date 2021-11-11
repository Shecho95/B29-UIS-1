const User = require('../models/user');

const emailExist = async (email = '') =>{
    let user = await User.findOne( { email } );
    if(user){
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}

module.exports = {
    emailExist
}
