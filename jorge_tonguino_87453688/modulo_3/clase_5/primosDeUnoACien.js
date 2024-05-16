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

console.log("Números primos del 1 al 100:");
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}