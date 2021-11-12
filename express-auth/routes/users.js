const { Router } = require('express');

const router = Router();

const { 
        usersPost, 
    } = require('../controllers/users')

// router.get('/', productsGet);

router.post('/', usersPost);

// router.get('/:sku', productsGetBySKU);

// router.put('/:sku', productsPut);

// router.delete(':sku', productsDelete);

module.exports = router;