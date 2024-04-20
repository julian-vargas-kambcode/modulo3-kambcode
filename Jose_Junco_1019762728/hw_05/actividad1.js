/// first try

const descuentoAplicado = (precio, peso) => {
    let descuento = 0;
    switch (peso){
        case (peso > 2 && peso <= 5):
            descuento = precio - (precio * 0.1);
            console.log (descuento);
            break;
        case (peso > 5 && peso <= 10):
            descuento = precio - (precio * 0.15);
            console.log (descuento);
            break;
        case (peso > 10):
            descuento = precio - (precio * 0.2);
            console.log (descuento);
            break;
        default:
            console.log (`no se aplica ningun descuento a tu compra de ${precio}`);
    }
}

descuentoAplicado();