const primoObtenido = require('readline');
let costo = primoObtenido.createInterface(process.stdin, process.stdout);
costo.question('DIGITA POR FAVOR EL NUMERO A VALIDAR:', (numero) => {
    let pri = calPrimo(numero);
    //let pagarK = calPago(numero, descuentos);
    //mostrar en consola
    
    costo.close();

});
// Descuento
function calPrimo(n) {
    if (n > 1) {
        for (const i = 2; i < n; i++) {
            if (n % i === 0) { 
                console.log(`NUMERO ` + n+ ` NO ES PRIMO`);
                return false;
            }else
            console.log(`NUMERO ` + n+ ` ES PRIMO`);
            return true;
        }
    } else {
        console.log(`NUMERO MENOR A 1`);
        return 0
    }

}


