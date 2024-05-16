const precioArticulo = require('readline');

const item = precioArticulo.createInterface({
    input: process.stdin,
    output: process.stdout
});

item.question('Ingresa la cantidad: ', (cantidad) => {
    cantidad = parseFloat(cantidad);
    item.question('Ingresa el valor: ', (valor) =>{
        valor = parseFloat(valor);
        const valorTotal = (cantidad * valor);
        descuento = 0;

        if (cantidad >= 0 && cantidad <= 2){
            descuento = 0; //0%
        } else if (cantidad > 2 && cantidad <= 5){
            descuento = 0.1;//10%
        } else if ( cantidad > 5 && cantidad <= 10){
            descuento = 0.15;//15%
        } else if( cantidad > 10){
            descuento = 0.2; //20%
        }
        const valorTotalCondescuento = valorTotal * (1 - descuento);
        console.log("Total a pagar incluido descuento es ", valorTotalCondescuento);
        item.close();
    });
});