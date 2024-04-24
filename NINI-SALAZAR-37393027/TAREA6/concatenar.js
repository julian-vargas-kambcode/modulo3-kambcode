/*### Ejercicio de Concatenación de Arrays:

- Dados los siguientes arrays de frutas:

  ```javascript
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];
  ```

- Utiliza un bucle for para concatenar frutas2 al final de frutas1. 
Luego, imprime el array resultante.*/

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
let concatenado = frutas1.concat(frutas2);
console.log(concatenado)