function sumarArreglo(numeros, callback) {

  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  
  callback(suma);
}

const numeros = [1, 2, 3, 4, 5, ];
sumarArreglo(numeros, function (resultado) {
  console.log("La suma todos los números del arreglo es; ", resultado); // Debería imprimir 15
});