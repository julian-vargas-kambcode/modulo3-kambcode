//1.  /// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);

console.log(productosEnStock);





//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const nombresDeProductos = productos.map(producto => producto.nombre);

console.log(nombresDeProductos);




//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

let precioTotal = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock > 0) {
        precioTotal += productos[i].precio;
    }
}

console.log("El precio total de los productos disponibles es: $" + precioTotal);
