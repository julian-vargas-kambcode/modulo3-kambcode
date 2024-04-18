const readline = require("readline");

const ingreseUnNumero = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ingreseUnNumero.question('Ingrese un numero ', (numero) =>{
    numero = parseInt(numero);
    console.log(`Los numero primos hasta son ${numero} son: `);
    for (let i = 1; i <= numero; i++) {
        if (esPrimo(i)){
            console.log(i);
        }
    }
    ingreseUnNumero.close();
});

function esPrimo(numero){
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0 )return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
