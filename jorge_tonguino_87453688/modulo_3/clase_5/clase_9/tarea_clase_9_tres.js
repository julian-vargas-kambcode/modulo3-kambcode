function filtrarPares(array, callback) {

  const numerosPares = array.filter(numero => numero % 2 === 0);
  callback(numerosPares);
}

function mostrarPares(numerosPares) {
  console.log("Los Números pares de este ejercicio son:", numerosPares.join(', '));
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtrarPares(numeros, mostrarPares);