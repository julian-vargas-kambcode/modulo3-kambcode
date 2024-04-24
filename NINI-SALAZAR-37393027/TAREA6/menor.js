/*### Ejercicio de Búsqueda en Arrays de Objetos:

- Dado el siguiente array de objetos que representan productos:

  ```javascript
  let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  ```

- Utiliza un bucle for para encontrar el producto con el precio más
 bajo. Luego, imprime el nombre y el precio de ese producto.*/



const { off } = require("process");
let x = 0;
let menor = 0;
let i = 1;
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
for (const yee of productos) {
    if (x == 0) {
        menor = yee.precio;
        console.log(`NUMERO MENOR ` + yee.precio + ` Y LA PRENDA ES ` + yee.nombre)
        x = 1;
    } else {
        if (yee.precio < menor) {
            menor = yee.precio;
            console.log(`ESTE ES EL NUEVO NUMERO MENOR ` + yee.precio + ` Y EL NOMBRE ES ` + yee.nombre)
        }
    }

}