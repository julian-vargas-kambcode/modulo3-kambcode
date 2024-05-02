const fruteria = require('readline'); // requiriendo módulo de readline

const tienda = fruteria.createInterface({  //creado interface de manipulación del salida (stdin ) y entrada (stdout)
    input: process.stdin,       //procedimiento de salida
    output: process.stdout      //procedimiento de entrada  
});

tienda.question('Ingresa la precio: ', (precio) => {             // entrada de datos a la variable precio
    tienda.question('Ingresa la peso: ', (peso) => {     // entrada de datos a la variable peso

        let descuento = 0;
        let totalp = 0;
        
        if (peso > 2 && peso <= 5) {
            descuento = (0.10);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:",totalp);  
            tienda.close();                          
        }else if(peso > 5 && peso <= 10){
            descuento = (0.15);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();              
        }else if (peso > 10){
            descuento = (0.20);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();                        
        }else{
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();
        }
    });
});