const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;
  let i = 5;
  while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
  }
  return true;
}

rl.question("Ingresa un numero", (numero) => {
  if (!isNaN(numero)){
    if(esPrimo(parseInt(numero))){
      console.log(numero + " es un número primo.");
    }else {
      console.log(numero + " no es un número primo.");
    }
   rl.close();
  }else {
    console.log("Debes ingresar un número válido.");
    rl.close();
  }
})