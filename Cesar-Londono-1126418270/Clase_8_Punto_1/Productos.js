const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log("Productos en stock:");
productosEnStock.forEach(producto => console.log(producto.nombre));

const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

let precioTotal = 0;
productosEnStock.forEach(producto => {
    precioTotal += producto.precio * producto.stock;
});
console.log("Precio total de productos disponibles:", precioTotal);