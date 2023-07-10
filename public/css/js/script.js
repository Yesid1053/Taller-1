function filtrarProductos() {
    var categoria = document.getElementById("categoryfiltro").value;
    var precio = document.getElementById("filtroPrecio").value;
    var nombre = document.getElementById("filtroNombre").value;


    if (nombre != "") {
        console.log("nombre no vacio")
        var productosfiltro = document.getElementsByClassName("card");
        console.log(`productos: ${productosfiltro}`)
        for (let i = 0; i < productosfiltro.length; i++) {
            var nombreProducto = productosfiltro[i].getElementsByClassName("card-title")[0].innerHTML;
            if (nombreProducto.toLowerCase().includes(nombre.toLowerCase()) ) {
                
                productosfiltro[i].style.display = "block";

                
                console.log(productosfiltro[i])
            } else {
                productosfiltro[i].style.display = "none";
            }
        }

    }
    if (categoria != ""){
        console.log("categoria no vacio")
        var productosfiltro = document.getElementsByClassName("card");
        console.log(`productos: ${productosfiltro}`)
        for (let i = 0; i < productosfiltro.length; i++) {
            var categoriaProducto = productosfiltro[i].getElementsByClassName("card-text")[0].innerHTML;

            if (categoriaProducto.toLowerCase().includes(categoria.toLowerCase()) ) {
                
                productosfiltro[i].style.display = "block";

                
                console.log(productosfiltro[i])
            } else {
                productosfiltro[i].style.display = "none";
            }
        }
    }

    if(precio != ""){
        console.log("precio no vacio")
        var productosfiltro = document.getElementsByClassName("card");
        console.log(`productos: ${productosfiltro}`)
        for (let i = 0; i < productosfiltro.length; i++) {
            var precioProducto = productosfiltro[i].getElementsByClassName("card-text")[1].innerHTML;
            var precioCadaProducto = parseFloat(precioProducto.match(/\d+\.\d+/)[0]);
            console.log(`es mayor el precio del producto ${precioCadaProducto} que el precio del filtro ${precio}`)
            if (precioCadaProducto>=precio ) {
                
                productosfiltro[i].style.display = "block";

                
                console.log(productosfiltro[i])
            } else {
                productosfiltro[i].style.display = "none";
            }
        }
    }




}
function limpiarFiltros() {
    document.getElementById("categoryfiltro").value = "";
    document.getElementById("filtroPrecio").value = "";
    document.getElementById("filtroNombre").value = "";

    var productos = document.getElementsByClassName("card");
    for (let i = 0; i < productos.length; i++) {
        productos[i].style.display = "block";
    }
}