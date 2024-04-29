function filtrarArreglo(arreglo, callbackFiltro) {
  return arreglo.filter(callbackFiltro);
}

const numeros = [1, 2, 3, 4, 5, 10, 15, 16];
const numerosPares = filtrarArreglo(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log( "Este filtro me debuelve un nuevo arreglo con numeros pares: ",numerosPares); // Debería imprimir [2, 4]