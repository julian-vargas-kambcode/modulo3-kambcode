const rangosDescuento = [
    [0, 2, 0],
    [2.01, 5, 10],
    [5.01, 10, 15],
    [10.01, Infinity, 20]
];

function calcularDescuento(kilosComprados, rangosDescuento) {
    for (const rango of rangosDescuento) {
        const min = rango[0];
        const max = rango[1];
        const porcentajeDescuento = rango[2];

        if (kilosComprados >= min && kilosComprados <= max) {
            return porcentajeDescuento;
        }
    }
    return 0; 
}

// Ingresa la cantidad de kilos de manzanas comprados aquí
const kilosComprados = 3;

const precioBase = 10; // Precio base por kilo
const descuento = calcularDescuento(kilosComprados, rangosDescuento);
console.log("El descuento aplicado es: " + descuento + "%");

const precioFinal = precioBase * kilosComprados * (1 - descuento / 100);
console.log("El precio final es: $" + precioFinal.toFixed(2));




