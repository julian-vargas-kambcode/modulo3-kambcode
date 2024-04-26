const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const sumaTotal = productos.reduce((acumulador,valores ) => {

     return acumulador + valores.precio;
}, 0);


const newStock = productos.filter(
    (productos) => productos.stock > 0
);
console.log(newStock);

const nombreProducto = productos.map((value) => {
    delete value.precio;
    delete value.stock;
    return value;
});
console.log(nombreProducto);
console.log("Suma total: ", sumaTotal);


  

