const { Router } = require('express');
const { check } = require('express-validator');

const { 
    emailExist,
    rolExist,
    userByIdExists
} = require('../helpers/req-validators');
const { validateDate } = require('../middlewares')

const router = Router();

const { 
    usersGet,
    usersPost, 
    usersPut,
    usersDelete
} = require('../controllers/users')

router.get('/', usersGet);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'La contraseña debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(emailExist),
    check('rol').custom(rolExist),
    validateDate
], usersPost);

router.put('/:id', [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(userByIdExists),
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateDate
], usersPut);

router.delete('/:id', [
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(userByIdExists),
    validateDate
], usersDelete);

// router.get('/:id', productsGetBySKU);

module.exports = router;