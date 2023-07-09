const router = require('express').Router();
const control = require('../resources/control.js');

let productos = control.leer();

let categorias = ["Accesorios", "Calzado", "Ropa", "Suplementos", "Maquinas", "Otros"]
let alert = ""


router.get('/', (req, res) => {
    res.render('index', {
        title: 'SportFit',
        message: 'Bienvenido a SportFit',
        productos: productos,
        categorias: categorias,
        alert: alert
    });
});
router.post('/registrar', (req, res) => {
    const { name, category, price, image } = req.body;
    const data = req.body;
    console.log(data)
    const id = productos.length + 1;
    productos.push({ id, name, category, price, image });
    alert = "Producto registrado"
    control.escibir(productos);
    res.redirect('/');
});

router.post('/modificar', (req, res) => {


    const { id, name, category, price, image } = req.body;

    const data = req.body;
    console.log(data)

    productos.forEach(producto => {
        if (producto.id == id) {
            producto.name = name;
            producto.category = category;
            producto.price = price;
            producto.image = image;
        }
    });

    alert = "Producto modificado"
    control.escibir(productos);
    res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    // listaLibros = listaLibros.filter(libro => libro.id != id);
    // control.escibir(listaLibros);

    productos = productos.filter(producto => producto.id != id);
    control.escibir(productos);
    alert = "Producto eliminado"
    res.redirect('/');
});


module.exports = router;
