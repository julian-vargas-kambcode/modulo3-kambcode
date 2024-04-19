// programa para calcular descuentos

const precio=1000;
const peso= 7;
let descuento=0;
// funcion calcular el descuento
function calcularDescuentos(precio,descuento){
    return precio*(1-descuento)
}
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
    }


let pagar = calcularDescuentos(precio,descuento);
//mostrar en consola
console.log(pagar);
