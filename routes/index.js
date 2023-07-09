const router = require('express').Router();
const control = require('../resources/control.js');

let productos = control.leer();



router.get('/', (req, res) => {
    res.render('index', {
        title: 'SportFit',
        message: 'Bienvenido a SportFit',
        productos: productos
    });
});


module.exports = router;
