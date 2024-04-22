const pesokilo=1;
const precioKilo=1000;
let total=0;
let totalPagar=0;


switch(true) {

    case(pesokilo >2 && pesokilo<=5):
        
        total=precioKilo*pesokilo;
        totalPagar = total-(total*10/100);
        console.log(`Debe Cancelar, $ ${totalPagar}`);
        break;
    
    case(pesokilo > 5 && pesokilo <=10):
        total=precioKilo*pesokilo;
        totalPagar = total-(total*15/100);
        console.log(`Debe Cancelar, $ ${totalPagar}`);
    break;

    case(pesokilo > 10):
        total=precioKilo*pesokilo;
        totalPagar = total-(total*20/100);
        console.log(`Debe Cancelar, ${totalPagar}`);
        break;
    
    case(pesokilo > 0 && pesokilo <= 2):
        total=precioKilo*pesokilo;
        console.log(`NO Tiene Descuento, debe caancelar $ ${total}`);
        break;
    }




