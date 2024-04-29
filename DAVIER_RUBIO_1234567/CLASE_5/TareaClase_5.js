const precioPorKilo = require('readline');

const Kilo = precioPorKilo.createInterface({
    input: process.stdin,
    output: process.stdout
});

Kilo.question('Ingresa la cantidad: ', (cantidad) => {
    cantidad = parseFloat(cantidad);
    Kilo.question('Ingrese el precio: ', (Precio) => {
        Precio = parseFloat(Precio);
        const valorFinal = (cantidad * Precio);
        descuento = 0;

        if (cantidad >= 0 && cantidad <= 2){
            descuento = 0; 
        } else if (cantidad > 2 && cantidad <= 5){
            descuento = 0.1;
        }else if (cantidad > 5 && cantidad <= 10){
            descuento = 0.15;
        }else if (cantidad > 10 ){
            descuento = 0.20;
        }

        const valorDescuento = valorFinal * (1 - descuento);
        console.log("Valor a pagar con descuento:", valorDescuento);
        Kilo.close();
    });
});