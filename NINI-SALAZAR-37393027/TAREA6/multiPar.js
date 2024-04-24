/*## Ejercicio de Bucle For con Arrays:

- Dado el siguiente array de números:

  ```javascript
  let numeros = [1, 2, 3, 4, 5];
  ```

- Utiliza un bucle for para multiplicar cada número por 2
 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.*/


let numeros = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i< numeros.length; i++) {
    newArray[i]=numeros[i]*2;
}
console.log(`MI NUEVO ARREGLO MULTIPLICADO POR 2 ES: ${newArray}`);