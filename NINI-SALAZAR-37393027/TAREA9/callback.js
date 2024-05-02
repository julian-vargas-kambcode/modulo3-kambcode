/*# Tarea 9

- **Callbacks en Manejo de Datos:**

  Descripción: Crea una función que tome un arreglo de números y un callback, y llame al 
  callback con el resultado de sumar todos los números del arreglo.

  Ejercicio:

  ```javascript*/
  console.log(`************************************************`)
  console.log(`***********Callbacks en Manejo de Datos:**********************`)
  
let sum=0;
  function sumarArreglo(numeros, callback) {
    sum = numeros.reduce((acum, valor)=>{
      return acum+valor;
    },0);
    callback(sum);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(`LA SUMA DE ESTE ARREGLO DA `+resultado); // Debería imprimir 15
  });
  console.log(`************************************************`)
  /**Callbacks para Filtrar Elementos de un Arreglo:**

  Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
  Ejercicio:

  ```javascript*/
  function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
  }

  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]
  ```