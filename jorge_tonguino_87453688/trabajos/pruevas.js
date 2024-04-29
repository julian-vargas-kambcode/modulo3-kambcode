function filtrarNumerosPares(array, callback) {
  // Utiliza el método filter para filtrar los números pares del array
  const numerosPares = array.filter(numero => numero % 2 === 0);
  // Llama al callback con el array de números pares como argumento
  callback(numerosPares);
}

function mostrarPares(numerosPares) {
  // Imprime los números pares en la consola
  console.log("Números pares:", numerosPares.join(', '));
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtrarPares(numeros, mostrarPares);