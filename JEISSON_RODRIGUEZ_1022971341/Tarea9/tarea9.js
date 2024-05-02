
// Tarea 9.1 - Callbacks en Manejo de Datos

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo 
    // y llamar al callback con el resultado
    const resultado = numeros.reduce(
        (acumulador, valor) => (acumulador += valor), 0
    );
    callback(resultado);
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });

 // Tarea 9.2 - Callbacks para Filtrar Elementos de un Arreglo

 function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los 
    // elementos que pasan el filtro
    return arreglo.filter(callbackFiltro);
  }
  
  const numeros2 = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros2, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]

  
// Tarea 9.3 - Callbacks: Filtrar Números Pares

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(entradaNumeros, callback) {
    // Tu codigo acá
    const numerosPares = entradaNumeros.filter((numero) => numero % 2 === 0);
    callback(numerosPares);
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log(numerosPares);
  }
  
  // Array de números de ejemplo
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros3, mostrarPares);