function calcularPrecio(precioPorKilo, kilosComprados) {
    let descuento = 0;

    if (kilosComprados <= 2) {
        descuento = 0;
    } else if (kilosComprados <= 5) {
        descuento = 0.1;
    } else if (kilosComprados <= 10) {
        descuento = 0.15;
    } else {
        descuento = 0.2;
    }

    let precioTotal = precioPorKilo * kilosComprados;
    let descuentoAplicado = precioTotal * descuento;
    let precioFinal = precioTotal - descuentoAplicado;

    return precioFinal;
}

// Ejemplo de uso del programa
let precioPorKilo = 3; // Precio por kilo de manzanas
let kilosComprados = 8; // Kilos de manzanas comprados

let precioFinal = calcularPrecio(precioPorKilo, kilosComprados);
console.log("El precio a pagar es:", precioFinal);
