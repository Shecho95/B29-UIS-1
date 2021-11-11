const { Router } = require('express');
const { check } = require('express-validator');

const { emailExist } = require('../helpers/req-validators');
const { validateDate } = require('../middlewares')

const router = Router();

const { 
        usersPost, 
    } = require('../controllers/users')

// router.get('/', productsGet);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'La contraseña debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(emailExist),
    check('rol').isIn(['Admin', 'Seller', 'Client']),
    validateDate
], usersPost);

// router.get('/:sku', productsGetBySKU);

// router.put('/:sku', productsPut);

// router.delete(':sku', productsDelete);

module.exports = router;