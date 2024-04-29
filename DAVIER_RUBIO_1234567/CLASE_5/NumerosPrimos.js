const readline = require('readline');

const nm = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;
  let index = 5;
  while (index * index <= numero) {
      if (numero % index === 0 || numero % (index + 2) === 0) return false;
      index += 6;
  }
  return true;
}

nm.question(" Por favor ingresa un numero ", (numero) => {
  if (!isNaN(numero)){
    if(esPrimo(parseInt(numero))){
      console.log(numero + " es un número primo.");
    }else {
      console.log(numero + " no es un número primo.");
    }
   nm.close();
  }else {
    console.log("Debes ingresar un número válido.");
    nm.close();
  }
})