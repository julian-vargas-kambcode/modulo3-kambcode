
function sumarArreglo(numeros, callback) {
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
callback(suma);
}

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function(resultado) {
console.log(resultado); 
});


function filtrarArreglo(arreglo, callbackFiltro) {
return arreglo.filter(callbackFiltro);
}


const numerosPares = filtrarArreglo(numeros, function(numero) {
return numero % 2 === 0;
});
console.log(numerosPares); 


function filtrarPares(array, callback) {
const pares = array.filter(numero => numero % 2 === 0);
callback(pares);
}


function mostrarPares(numerosPares) {
  console.log("Números pares:", numerosPares);
}

filtrarPares(numeros, mostrarPares);
