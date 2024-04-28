const totalPagarAplicado = (precio, peso) => {
    if(2 < peso <= 5){
        let totalPagar = precio - (precio * 0.1);
        console.log (totalPagar);
    } else if (5 < peso <= 10){
        let totalPagar = precio - (precio * 0.15);
        console.log (totalPagar);
    } else if ( peso > 10){
        let totalPagar = precio - (precio * 0.2);
        console.log (totalPagar);
    } else{
        console.log(`tienes que pagar sin descuento`)
    }
}
totalPagarAplicado(10000, 7);


