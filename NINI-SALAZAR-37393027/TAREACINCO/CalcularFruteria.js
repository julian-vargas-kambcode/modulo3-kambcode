const precio=require('readline');
let costo=precio.createInterface(process.stdin, process.stdout);
costo.question('INGRESE EL VALOR DEL PRECIO DE LA MANZANA:',(valor)=>{
    costo.question('INGRESE KILOS DE MANZANA:',(peso)=> {
        let descuentos= calDescuento(peso);
        let pagarK = calPago(valor,descuentos);
        let total = calcTotal(pagarK, peso);
        //mostrar en consola
        console.log(`LA MANZANA LE QUEDA EN `+ pagarK + ` POR KILO`);
        console.log(`DEBES PAGAR UN TOTAL DE `+ total + ` PESOS`);
        costo.close();
    });

});
// Descuento de las manzanas
function calDescuento(k){
    if (2 < k <= 5) {
        descuento = 0.10;
    } else if (k <= 10) {
        descuento = 0.15;
    } else {
        descuento = 0.20;
    }
    return descuento;
}

function calPago(precio,descuento){
    return precio*(1-descuento)
}

function calcTotal(pag, pes){
    return pag*pes
}