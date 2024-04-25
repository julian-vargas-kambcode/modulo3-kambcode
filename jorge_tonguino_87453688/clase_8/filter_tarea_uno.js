const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const productosEnStock = productos.filter(productos => productos.stock > 0);
console.log("los productos que tinen stock son: ", productosEnStock);

const nombreDeProductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos: ", nombreDeProductos);

const precioTotal = productosEnStock.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio de productos disponibles es: ", precioTotal);