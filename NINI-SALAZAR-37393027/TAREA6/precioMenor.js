let x = 0;
const menor = 0;
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    
];
/*menor() {
    x= productos.precio;
    return x;
}*/

console.log(menor);
for (let i = 0; i < productos.length; i++) {
    console.log(`${productos.nombre[i]}`);
    /* if (productos.precio[i] < 0) {
         menor = productos;
     }*/

    console.log(`paso ${productos.nombre}`);
}