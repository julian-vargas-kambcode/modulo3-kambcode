// programa para calcular descuentos

const precio=require('readline');
let costo=precio.createInterface(process.stdin, process.stdout);
costo.question('ingresa el precio del producto:',(numEvalur)=>{
    costo.question('ingresa el peso del producto:',(pesoEvaluar)=> {
        let descuentos= calcularDescuento(pesoEvaluar);
        let pagar = calcularPago(numEvalur,descuentos);
        //mostrar en consola
        console.log(pagar);
        costo.close();
    });

});
// funcion calcular el descuento
function calcularPago(precio,descuento){
    return precio*(1-descuento)
}
function calcularDescuento(peso){
    if((peso>0)&&(peso<=2)){
    descuento=0;
    }else if((peso>2)&&(peso<=5)){
    descuento=10/100;
    }else if((peso>5)&&(peso<=10)){
    descuento=15/100;
    }else if(peso>10){
    descuento=20/100;
    }else{
    console.log('valor erroneo');
    return NaN;
    }
    return descuento;
}


