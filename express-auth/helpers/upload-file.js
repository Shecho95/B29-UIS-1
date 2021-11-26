const path = require('path');

const uploadFile = (files, enableExt = ['png', 'jpg', 'jpeg', 'gif'], folder = '') => {
    return new Promise((resolve, reject) => {
        const { imgProfile } = files;
        const nameSplit = imgProfile.name.split('.');
        const ext = nameSplit[nameSplit.length - 1];

        if(!enableExt.includes(ext)){
            return reject(`Error: extensiones validas ${ enableExt }`);
        }

        const uploadPath = path.join(__dirname, '../public/uploads', folder, imgProfile.name);

        imgProfile.mv(uploadPath, (err) =>{
            if(err)
                reject( err );
            resolve(imgProfile.name)
        })
    });
}

module.exports = {
    uploadFile
}