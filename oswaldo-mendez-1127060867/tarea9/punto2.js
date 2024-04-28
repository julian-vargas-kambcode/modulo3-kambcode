function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    const newArreglo = arreglo.filter((num) => num %2 ===0
    );
    callbackFiltro(newArreglo);
}

  const numeros = [1, 2, 3, 4, 5];
  let numerosPares = filtrarArreglo(numeros, function (numero) {
    console.log(numero); // Debería imprimir [2, 4]
  });
  