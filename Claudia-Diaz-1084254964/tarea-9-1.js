/////Callbacks en Manejo de Datos:

///Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

Ejercicio:

function sumarArreglo(numeros, callback) {
  // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
  console.log(resultado); // Debería imprimir 15
});
 Respuesta

function sumarArreglo(numeros, callback) {
  // Utilizamos el método reduce para sumar todos los elementos del arreglo
  const suma = numeros.reduce((total, numero) => total + numero, 0);
    callback(suma);
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function(resultado) {
  console.log(resultado); // Debería imprimir 15
});

///////
////  2...Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

function filtrarArreglo(arreglo, callbackFiltro) {
  // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
}

const numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]

Respuesta
function filtrarArreglo(arreglo, callbackFiltro) {
  const arregloFiltrado = arreglo.filter(callbackFiltro);
  return arregloFiltrado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function(numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); 


///////
3  Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.

function filtrarPares(numeros, callback) {

  const numerosPares = [2,3,4,5,6,7,8,9];
  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
      }
    }
  callback(numerosPares);
  }
  

