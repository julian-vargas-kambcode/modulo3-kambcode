function calcularPrecio() {
    let precioPorKilo = document.getElementById('precioKilo').value;
    let peso = document.getElementById('peso').value;
    let descuento = 0;

    if (peso <= 2) {
        descuento = 0;
    } else if (peso > 2 && peso <= 5) {
        descuento = 0.1;
    } else if (peso > 5 && peso <= 10) {
        descuento = 0.15;
    } else {
        descuento = 0.2;
    }

    let precioSinDescuento = precioPorKilo * peso;
    let descuentoAplicado = precioSinDescuento * descuento;
    let precioFinal = precioSinDescuento - descuentoAplicado;

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `El precio a pagar es: $${precioFinal.toFixed(2)}`;
}
