function sumarArreglo(numeros, callback) {
    const suma = numeros.reduce((total, num) => total + num, 0);
    callback(null, suma);
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  sumarArreglo(numeros1, function(error, resultado) {
    if (error) {
      console.error("Error al sumar el arreglo:", error);
    } else {
      console.log("Suma del arreglo:", resultado);
    }
  });

  function filtrarArreglo(arreglo, callbackFiltro) {
    const resultado = [];
    for (const elemento of arreglo) {
      if (callbackFiltro(elemento)) {
        resultado.push(elemento);
      }
    }
    return resultado;
  }
  
  const numeros2 = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros2, function(numero) {
    return numero % 2 === 0;
  });
  console.log("Números pares del arreglo:", numerosPares);

  function filtrarParesMultiplicar(numeros, callback) {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const numerosMultiplicados = numerosPares.map(num => num * 2);
    callback(null, numerosMultiplicados);
  }
  
  function mostrarNumerosMultiplicados(error, numerosMultiplicados) {
    if (error) {
      console.error("Error al filtrar y multiplicar:", error);
    } else {
      console.log("Números pares multiplicados por 2:", numerosMultiplicados);
    }
  }
  
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  filtrarParesMultiplicar(numeros3, mostrarNumerosMultiplicados);